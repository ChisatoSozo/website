import React, { useMemo, useState, useEffect, MouseEventHandler } from "react";
import FuzzySearch from "fuzzy-search";
import {
  Box,
  Grid,
  TextInput,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Hoverable = ({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  const [hovered, setHovered] = useState(false);
  const theme = useMantineTheme();
  return (
    <Box
      p="xs"
      mb="xs"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() =>
        setHovered((hovered) => (hovered ? false : hovered))
      }
      style={{
        cursor: "pointer",
        backgroundColor: selected
          ? theme.colors.gray[2]
          : hovered
          ? theme.colors.gray[0]
          : "transparent",
        transition: "background-color 0.2s",
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

interface CommonSearchProps {
  items: Record<string, React.ReactNode>;
  title: string;
  defaultSelected: string;
}

export const CommonSearch: React.FC<CommonSearchProps> = ({
  items,
  title,
  defaultSelected,
}) => {
  const searcher = useMemo(() => new FuzzySearch(Object.keys(items)), [items]);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<string | null>(
    defaultSelected
  );
  const isMobile = useMediaQuery("(max-width: 48em)");

  const results = searcher.search(search);
  const theme = useMantineTheme();

  useEffect(() => {
    setSelectedItem(defaultSelected);
  }, [defaultSelected]);

  const resultsRender = useMemo(
    () =>
      results.map((result) => (
        <Hoverable
          selected={selectedItem === result}
          key={result}
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem(result);
          }}
        >
          <Text>{result}</Text>
        </Hoverable>
      )),
    [results, selectedItem]
  );

  const ItemsList = ({ height }: { height: number | string }) => (
    <Box
      p="md"
      style={{
        borderRight: isMobile ? 0 : `1px solid ${theme.colors.gray[2]}`,
      }}
    >
      <Text style={{ fontWeight: 700 }} mb="sm">
        {title} List
      </Text>
      <Box
        style={{ height, overflowY: "auto" }}
        onWheel={(event) => {
          if (event.deltaY < 0 && event.currentTarget.scrollTop === 0) {
            return;
          }
          console.log(event.currentTarget.scrollTop);
          console.log(
            event.currentTarget.scrollHeight - event.currentTarget.clientHeight
          );
          if (
            event.deltaY > 0 &&
            Math.abs(
              event.currentTarget.scrollTop -
                (event.currentTarget.scrollHeight -
                  event.currentTarget.clientHeight)
            ) < 2
          ) {
            return;
          }
          event.stopPropagation();
        }}
      >
        {resultsRender}
      </Box>
    </Box>
  );

  const ItemDetails = () => (
    <Box p="md" style={{ height: isMobile ? "auto" : "calc(100vh - 180px)" }}>
      {selectedItem ? (
        <>
          <Text size="xl" mb="sm" style={{ fontWeight: 700 }}>
            {selectedItem}
          </Text>
          {items[selectedItem]}
        </>
      ) : (
        <Text color="dimmed">Select an item to view details</Text>
      )}
    </Box>
  );

  return (
    <Box w="100%">
      <TextInput
        placeholder={`Search ${title.toLowerCase()}...`}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        mb="md"
      />
      {isMobile ? (
        <Stack>
          <ItemsList height={200} />
          <ItemDetails />
        </Stack>
      ) : (
        <Grid>
          <Grid.Col span={4}>
            <ItemsList height="calc(100dvh - 200px)" />
          </Grid.Col>
          <Grid.Col span={8}>
            <ItemDetails />
          </Grid.Col>
        </Grid>
      )}
    </Box>
  );
};
