import React from "react";
import { CommonSearch } from "./CommonSearch";
import { Text, List } from "@mantine/core";

const protocol_host_port =
  window.location.protocol + "//" + window.location.host + "/";

const projects: Record<string, React.ReactNode> = {
  "Danmaku 3D": (
    <>
      <Text>
        <strong>Link:</strong>{" "}
        <a href={protocol_host_port + "menu"}>Danmaku 3D</a>
      </Text>
      <Text mt="md">
        <strong>Description:</strong> A 3D bullet hell game playable on the web,
        built with Babylon.js and React.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Complex game logic and 3D environment</List.Item>
        <List.Item>Compute shaders for millions of projectiles</List.Item>
        <List.Item>
          Innovative asynchronous collision detection system
        </List.Item>
      </List>
      <Text mt="md">
        <strong>Technical Challenge:</strong> Developed a novel method for
        asynchronous pixel data readback in WebGL, solving performance issues
        with collision detection. This solution was later integrated into
        Babylon.js.
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "GENIUS Platform": (
    <>
      <Text>
        <strong>Description:</strong> A platform developed at VERSES for
        implementing and developing the HSML spec.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Implementation of HSML specification</List.Item>
        <List.Item>High-performance query language</List.Item>
        <List.Item>Vector-document-graph database</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Rust, Database technologies
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Lead Developer
      </Text>
    </>
  ),
  OneMap: (
    <>
      <Text>
        <strong>Description:</strong> A geophysical simulation platform for
        real-time processing and visualization of seismic activity.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Real-time data processing of seismic activity</List.Item>
        <List.Item>Advanced 3D rendering of isosurfaces</List.Item>
        <List.Item>Time-based visualization of seismic events</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> React, Three.js
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Lead Developer
      </Text>
    </>
  ),
  "elodate.com": (
    <>
      <Text>
        <strong>Description:</strong> A high-performance backend system and
        Flutter frontend for elodate.com, capable of supporting hundreds of
        thousands of users on a single VPS.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Highly scalable architecture</List.Item>
        <List.Item>Efficient resource utilization</List.Item>
        <List.Item>Robust API for frontend integration</List.Item>
        <List.Item>Flutter-based frontend for cross-platform support</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Rust, Flutter
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Word Find VR": (
    <>
      <Text>
        <strong>Link:</strong>{" "}
        <a href={protocol_host_port + "wordfind"}>Word Find VR</a>
      </Text>
      <Text mt="md">
        <strong>Description:</strong> A VR-compatible word-finding game with
        immersive gameplay and dynamic audio experience.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>VR-optimized user interface</List.Item>
        <List.Item>Intuitive word selection mechanics</List.Item>
        <List.Item>Immersive 3D environment</List.Item>
        <List.Item>Dynamic, adaptive background music system</List.Item>
        <List.Item>Procedurally generated, harmonized sound effects</List.Item>
      </List>
      <Text mt="md">
        <strong>Technical Highlights:</strong>
      </Text>
      <List>
        <List.Item>
          Seamlessly looping background music that progresses with the level
        </List.Item>
        <List.Item>
          Intelligent music progression tied to player advancement
        </List.Item>
        <List.Item>
          Dynamic sound effect generation in tune with the current music key
        </List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> WebXR, Three.js or Babylon.js,
        JavaScript, Web Audio API
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  Amorai: (
    <>
      <Text>
        <strong>Description:</strong> A platform for interacting with live-2D
        animated AI characters.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Integration of Apollo for GraphQL implementation</List.Item>
        <List.Item>Handling of both GraphQL and WebSocket traffic</List.Item>
        <List.Item>Use of PostgreSQL as the backend storage solution</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Apollo, GraphQL, WebSockets,
        PostgreSQL
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Lead Developer
      </Text>
    </>
  ),
  "Censys UI Component Library": (
    <>
      <Text>
        <strong>Description:</strong> A set of reusable UI components developed
        at Censys to improve consistency and efficiency across products.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Consistent design across multiple products</List.Item>
        <List.Item>Improved developer productivity</List.Item>
        <List.Item>Reduced CI/CD times</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> React, CI/CD tools
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Lead Developer
      </Text>
    </>
  ),

  "Live Code VR": (
    <>
      <Text>
        <strong>Link:</strong>{" "}
        <a href="https://github.com/ChisatoSozo/live-code-vr">
          live-code-vr on GitHub
        </a>
      </Text>
      <Text mt="md">
        <strong>Description:</strong> An experimental VR coding environment that
        allows real-time code editing and visualization in virtual reality.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Real-time code editing in VR</List.Item>
        <List.Item>
          Live refresh of VR environment based on code changes
        </List.Item>
        <List.Item>Screen sharing within VR for code display</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> React, WebXR, getUserMedia API
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Latent Preference Discovery": (
    <>
      <Text>
        <strong>Description:</strong> A personal project for discovering latent
        preferences using human faces and StyleGAN3.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Integration with StyleGAN3</List.Item>
        <List.Item>Facial analysis and preference mapping</List.Item>
        <List.Item>
          Machine learning algorithms for preference discovery
        </List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Python, StyleGAN3, Machine Learning
        libraries
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Group Chat Impersonation Bot": (
    <>
      <Text>
        <strong>Description:</strong> A bot capable of impersonating individuals
        based on group chat history, using fine-tuned large language models.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Natural language processing</List.Item>
        <List.Item>Personality mimicking based on chat history</List.Item>
        <List.Item>Integration with chat platforms</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Python, NLP libraries, Large
        Language Models
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Algorithmic Cryptocurrency Trader": (
    <>
      <Text>
        <strong>Description:</strong> An automated trading system for
        cryptocurrencies using algorithmic strategies.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Real-time market data processing</List.Item>
        <List.Item>Implementation of trading algorithms</List.Item>
        <List.Item>Risk management and position sizing</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Python, Cryptocurrency APIs,
        Financial libraries
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Touhou-online": (
    <>
      <Text>
        <strong>Description:</strong> A multiplayer 3D game development project
        using gRPC for efficient inter-service communication.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>
          Implementation of gRPC for fast, efficient communication between game
          services
        </List.Item>
        <List.Item>3D game environment development</List.Item>
        <List.Item>Multiplayer functionality</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> gRPC, 3D game development
        technologies (specific engine to be confirmed)
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer (Personal Project)
      </Text>
    </>
  ),
  "Cogment Framework Integration": (
    <>
      <Text>
        <strong>Description:</strong> Integration of the Cogment framework,
        likely as part of the work at AI Redefined (AIR).
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>
          Integration of Cogment framework with existing systems
        </List.Item>
        <List.Item>
          Use of gRPC for communication within the framework
        </List.Item>
        <List.Item>
          Possible involvement in AI training and simulation systems
        </List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Cogment, gRPC, AI technologies
        (specific details to be confirmed)
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Developer at AI Redefined
      </Text>
    </>
  ),
  "Orchestra CMS": (
    <>
      <Text>
        <strong>Description:</strong> A Content Management System developed on
        the Salesforce platform at Stantive Technologies Group.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Content management tailored for Salesforce</List.Item>
        <List.Item>Integration with Salesforce ecosystem</List.Item>
        <List.Item>Customizable for client needs</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Salesforce, CMS technologies
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Occasional bug fixer
      </Text>
    </>
  ),
  "MoneyMate Loan Software": (
    <>
      <Text>
        <strong>Description:</strong> A comprehensive loan issuing and tracking
        software developed at MoneyMate.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Loan issuing functionality</List.Item>
        <List.Item>Loan tracking and management</List.Item>
        <List.Item>Reporting and analytics</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> Java, Spring Boot, Hibernate
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Part of dev team
      </Text>
    </>
  ),
  "Daily Discount Coupon App": (
    <>
      <Text>
        <strong>Description:</strong> A mobile application for distributing
        coupons for local businesses.
      </Text>
      <Text mt="md">
        <strong>Key Features:</strong>
      </Text>
      <List>
        <List.Item>Coupon distribution system</List.Item>
        <List.Item>Local business integration</List.Item>
        <List.Item>User-friendly mobile interface</List.Item>
      </List>
      <Text mt="md">
        <strong>Technologies Used:</strong> PHP, Smartface.io
      </Text>
      <Text mt="md">
        <strong>Role:</strong> Solo Developer
      </Text>
    </>
  ),
};

export const ProjectsWithSearch: React.FC = () => {
  return (
    <CommonSearch
      items={projects}
      title="Projects"
      defaultSelected="Danmaku 3D"
    />
  );
};
