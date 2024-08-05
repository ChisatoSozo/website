import { List } from "@mantine/core";
import { CommonSearch } from "./CommonSearch";

const skills: Record<string, React.ReactNode> = {
  React: (
    <>
      Extensive experience with React, including:
      <List>
        <List.Item>
          Developed Danmaku3D, a high-performance 3D bullet hell game using
          React and Babylon.js, demonstrating React's capabilities beyond
          traditional web applications.
        </List.Item>
        <List.Item>
          Created a comprehensive UI library at Censys, featuring an npm script
          for efficient boilerplate generation, consistent code styling, and
          improved developer collaboration.
        </List.Item>
        <List.Item>
          Implemented{" "}
          <a href="https://github.com/ChisatoSozo/live-code-vr">live-code-vr</a>
          , an experimental VR coding environment utilizing React's live refresh
          capabilities for real-time code editing and visualization in a VR
          space.
        </List.Item>
        <List.Item>
          Developed OneMap, a geophysical simulation platform featuring
          real-time data processing and visualization of seismic activity.
        </List.Item>
      </List>
      Proficient in leveraging React's ecosystem for both conventional web
      development and innovative applications in gaming and virtual reality.
    </>
  ),
  TypeScript: (
    <>
      I know TypeScript like the back of my hand. And given that the type system
      is turing complete (Yes I'm serious and yes it's{" "}
      <a href="https://github.com/microsoft/TypeScript/issues/14833">
        hilarious
      </a>
      ). I'm fairly certain I could pass a coding interview using the type
      system alone.
    </>
  ),
  JavaScript: (
    <>
      Extensive experience with JavaScript for both front-end and back-end
      development:
      <List>
        <List.Item>
          Proficient in vanilla JS as well as various frameworks and libraries.
        </List.Item>
        <List.Item>
          Worked with raw HTML/CSS/JS for personal projects.
        </List.Item>
        <List.Item>
          Advanced capabilities including writing promise polyfills from
          scratch.
        </List.Item>
        <List.Item>
          Experienced with pre-ES6 prototype-based JavaScript.
        </List.Item>
        <List.Item>
          Deep understanding of JavaScript's evolution and low-level details.
        </List.Item>
      </List>
    </>
  ),
  "Node.js": (
    <>
      Extensive experience with Node.js for server-side JavaScript programming:
      <List>
        <List.Item>
          Proficient in building scalable network applications and RESTful APIs.
        </List.Item>
        <List.Item>
          Familiar with Node.js's event-driven, non-blocking I/O model.
        </List.Item>
        <List.Item>
          Experience with various Node.js frameworks and libraries.
        </List.Item>
        <List.Item>
          Skilled in leveraging Node.js for both small-scale and
          enterprise-level projects.
        </List.Item>
      </List>
    </>
  ),
  Rust: (
    <>
      Significant experience with Rust development, including:
      <List>
        <List.Item>
          Designed and implemented a new database and query language to support
          the HSML spec for Verses.
        </List.Item>
        <List.Item>
          Developed the high-performance backend for{" "}
          <a href="https://elodate.com">elodate.com</a>, capable of supporting
          hundreds of thousands of users on a single VPS.
        </List.Item>
      </List>
      Proficient in leveraging Rust's performance benefits and safety features
      for system-level programming and web backends.
    </>
  ),
  Python: (
    <>
      Extensive experience with Python across multiple domains:
      <List>
        <List.Item>
          Conducted geophysical analysis of seismic activity at ESG Solutions.
        </List.Item>
        <List.Item>
          Implemented various machine learning projects at AI Redefined,
          including human-in-the-loop reinforcement learning systems.
        </List.Item>
        <List.Item>
          Developed a personal project for latent preference discovery using
          human faces and StyleGAN3.
        </List.Item>
        <List.Item>
          Fine-tuned large language models (LLMs), including creating a bot
          capable of impersonating individuals from group chat history.
        </List.Item>
        <List.Item>
          Designed and implemented an algorithmic cryptocurrency trader.
        </List.Item>
      </List>
      Proficient in applying Python to diverse fields including data analysis,
      machine learning, and financial technology.
    </>
  ),
  WebGL: (
    <>
      Experience with WebGL:
      <List>
        <List.Item>
          Utilized in conjunction with Babylon.js to create Danmaku3D, a
          first-person bullet-hell game.
        </List.Item>
        <List.Item>
          Implemented custom shaders and optimized rendering pipelines for
          complex 3D visualizations.
        </List.Item>
      </List>
    </>
  ),
  "Three.js": (
    <>
      Proficient in Three.js for 3D graphics in web applications:
      <List>
        <List.Item>
          Developed the front-end of OneMap, implementing advanced 3D rendering
          techniques to display isosurfaces and seismic activity over time.
        </List.Item>
        <List.Item>
          Created interactive 3D data visualizations for complex scientific
          datasets.
        </List.Item>
      </List>
    </>
  ),
  "Babylon.js": (
    <>
      Advanced experience with Babylon.js:
      <List>
        <List.Item>
          Created Danmaku3D, featuring the first implementation of asynchronous
          compute shaders in Babylon.js, optimized for mobile performance.
        </List.Item>
        <List.Item>
          Developed a 3D VR-compatible word-finding game with dynamic
          soundtracks and advanced particle effects.
        </List.Item>
      </List>
    </>
  ),
  WebXR: (
    <>
      Expertise in WebXR development:
      <List>
        <List.Item>
          Developed WordFinder VR, a VR-compatible word-finding game.
        </List.Item>
        <List.Item>
          Created an experimental VR coding environment (live-code-vr) allowing
          real-time editing of the VR world from within, using React's live
          refresh capabilities.
        </List.Item>
      </List>
      Proficient in creating immersive and interactive experiences for both VR
      and AR platforms.
    </>
  ),
  GraphQL: (
    <>
      Proficient in designing and implementing GraphQL APIs:
      <List>
        <List.Item>
          Utilized in the Amorai project for its developer familiarity and
          reduced boilerplate.
        </List.Item>
        <List.Item>Experience with schema design and resolvers.</List.Item>
        <List.Item>
          Understanding of when GraphQL is beneficial and when REST might be
          equally suitable.
        </List.Item>
      </List>
    </>
  ),
  Apollo: (
    <>
      Skilled in using Apollo for GraphQL implementations:
      <List>
        <List.Item>
          Implemented as the backend for Amorai, a platform for interacting with
          live-2D animated AI characters.
        </List.Item>
        <List.Item>
          Used to handle both GraphQL and WebSocket traffic.
        </List.Item>
        <List.Item>
          Leveraged to simplify API consumption and serving for developers.
        </List.Item>
      </List>
    </>
  ),
  WebSockets: (
    <>
      Extensive experience implementing WebSockets for various applications:
      <List>
        <List.Item>
          Used WebSockets for asynchronous APIs and real-time data updates.
        </List.Item>
        <List.Item>
          Implemented bytewise protocols over WebSockets for efficient data
          transfer.
        </List.Item>
        <List.Item>
          Expertise in implementing gRPC over WebSockets, combining the benefits
          of both technologies.
        </List.Item>
        <List.Item>
          Initiated development of a library to simplify gRPC over WebSockets
          implementations (
          <a href="https://github.com/ChisatoSozo/grpc-over-websockets">
            Github link
          </a>
          ).
        </List.Item>
      </List>
      Proficient in leveraging WebSockets for high-performance, real-time
      communication in web applications.
    </>
  ),
  GRPC: (
    <>
      Proficient in using gRPC (gRPC Remote Procedure Call) for efficient and
      fast inter-service communication:
      <List>
        <List.Item>
          Used in personal projects like Touhou-online for multiplayer 3D game
          development.
        </List.Item>
        <List.Item>
          Worked with gRPC at AI Redefined, integrating with their Cogment
          framework.
        </List.Item>
        <List.Item>
          Capable of reading gRPC data on the wire in raw bytes.
        </List.Item>
        <List.Item>
          Experience in implementing high-performance, scalable APIs using gRPC.
        </List.Item>
      </List>
    </>
  ),
  Docker: (
    <>
      Extensive experience with Docker across multiple projects:
      <List>
        <List.Item>
          Used in Amorai, AI Redefined, and Verses for deploying models and web
          applications.
        </List.Item>
        <List.Item>
          Proficient in constructing Dockerfiles with optimal layer caching and
          build phases.
        </List.Item>
        <List.Item>
          Experienced in writing docker-compose service definition files for
          microservices in local development.
        </List.Item>
      </List>
    </>
  ),
  PostgreSQL: (
    <>
      Skilled in PostgreSQL database design and management:
      <List>
        <List.Item>
          Used at Censys and as the backend storage solution for Amorai.
        </List.Item>
        <List.Item>
          Experience with ORM solutions like TypeORM for database interactions.
        </List.Item>
        <List.Item>
          Capable of working directly with relational databases when necessary.
        </List.Item>
      </List>
    </>
  ),
  MySQL: (
    <>
      Proficient in MySQL database administration and integration:
      <List>
        <List.Item>
          Used in a daily discount coupon app for storing users, coupons,
          stores, and transactions.
        </List.Item>
        <List.Item>
          Experience with database design and optimization for various
          application stacks.
        </List.Item>
        <List.Item>
          Also worked with MSSQL at ESG Solutions for storing seismic data.
        </List.Item>
      </List>
    </>
  ),
  Flutter: (
    <>
      Proficient in Flutter for cross-platform mobile app development:
      <List>
        <List.Item>
          Used Flutter to develop the frontend for elodate.com, a
          high-performance dating application.
        </List.Item>
        <List.Item>
          Experience in creating responsive and visually appealing user
          interfaces for both iOS and Android platforms.
        </List.Item>
        <List.Item>
          Familiar with state management solutions and Flutter's widget system.
        </List.Item>
      </List>
    </>
  ),
  "Express.js": (
    <>
      Experience with Express.js for building quick servers and small-scale
      applications:
      <List>
        <List.Item>Used for website hosting and small game backends.</List.Item>
        <List.Item>
          Proficient in rapid development of simple server-side behavior.
        </List.Item>
        <List.Item>Understands limitations for large-scale projects.</List.Item>
      </List>
    </>
  ),
  Flask: (
    <>
      Experience in developing web applications using Flask:
      <List>
        <List.Item>
          Used for serving Python applications in small-scale projects.
        </List.Item>
        <List.Item>
          Implemented in a latent preference discovery project involving human
          faces.
        </List.Item>
        <List.Item>
          Leveraged Flask's simplicity for rapid development of Python-based web
          services.
        </List.Item>
      </List>
    </>
  ),
  "Java EE": (
    <>
      Experience with Java EE (Enterprise Edition) for building enterprise-level
      applications:
      <List>
        <List.Item>
          Responsible for migrating JSP pages to JSF at Moneymate.
        </List.Item>
        <List.Item>
          Used Java EE as the backend for OneMap, providing a thin
          authentication and API wrapper around a seismic data database.
        </List.Item>
        <List.Item>
          Familiar with various Java EE technologies and their application in
          large-scale, distributed systems.
        </List.Item>
      </List>
    </>
  ),
  Java: (
    <>
      Proficient in Java programming, with experience in both enterprise and
      mobile application development. Skilled in leveraging Java's
      object-oriented features and extensive ecosystem.
    </>
  ),
};

export const SkillsWithSearch: React.FC = () => {
  return <CommonSearch items={skills} title="Skills" defaultSelected="React" />;
};
