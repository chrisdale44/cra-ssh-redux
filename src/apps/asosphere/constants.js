// @flow
import * as d3 from "d3";
import { allTrue } from "./components/helpers";

export type TrackId =
  | "PAGE_COMPOSITION"
  | "VISUAL_AND_RESPONSIVE_DESIGN"
  | "USER_INTERACTIONS"
  | "SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS"
  | "ARCHITECTURE"
  | "SCALABILITY"
  | "DATA"
  | "TOOLS_AND_TECHNOLOGIES"
  | "BROWSER_SUPPORT"
  | "DEVELOPMENT_LIFECYCLE"
  | "CODE_QUALITY"
  | "CODE_CRAFTSMANSHIP"
  | "CODE_REVIEW";

export type Milestone = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type MilestoneMap = {
  PAGE_COMPOSITION: Milestone,
  VISUAL_AND_RESPONSIVE_DESIGN: Milestone,
  USER_INTERACTIONS: Milestone,
  SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS: Milestone,
  ARCHITECTURE: Milestone,
  SCALABILITY: Milestone,
  DATA: Milestone,
  TOOLS_AND_TECHNOLOGIES: Milestone,
  BROWSER_SUPPORT: Milestone,
  DEVELOPMENT_LIFECYCLE: Milestone,
  CODE_QUALITY: Milestone,
  CODE_CRAFTSMANSHIP: Milestone,
  CODE_REVIEW: Milestone
};

export const milestones = [0, 1, 2, 3, 4, 5, 6];

export const milestoneToPoints = milestone => {
  const i = Object.keys(milestone)
    .reverse()
    .findIndex(key => allTrue(milestone[key]));
  const point = switchPoints(i);
  return point;
};

export const switchPoints = milestone => {
  switch (milestone) {
    case 0:
      return 14;
    case 1:
      return 12;
    case 2:
      return 10;
    case 3:
      return 8;
    case 4:
      return 6;
    case 5:
      return 4;
    case 6:
      return 2;
    default:
      return 0;
  }
};

export const pointsToLevels = {
  "0": " ",
  "30": "Graduate",
  "60": "Associate",
  "90": "Mid Level",
  "120": "Senior I",
  "150": "Senior II",
  "180": "Lead",
  "210": "Principal"
};

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
};

type Tracks = {|
  PAGE_COMPOSITION: Track,
  VISUAL_AND_RESPONSIVE_DESIGN: Track,
  USER_INTERACTIONS: Track,
  SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS: Track,
  ARCHITECTURE: Track,
  MESSAGING_AND_INTEGRATION: Track,
  PERFORMANCE: Track,
  SCALABILITY: Track,
  DATA: Track,
  TOOLS_AND_TECHNOLOGIES: Track,
  BROWSER_SUPPORT: Track,
  DEVELOPMENT_LIFECYCLE: Track,
  CODE_QUALITY: Track,
  CODE_CRAFTSMANSHIP: Track,
  CODE_REVIEW: Track
|};

export const tracks: Tracks = {
  PAGE_COMPOSITION: {
    displayName: "Page Composition",
    category: "A",
    description:
      "Develops expertise in native mobile platform engineering, such as iOS or Android",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: ["Able to describe how HTML is a structured markup language"]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to implement valid and semantic HTML.",
          "Able to describe how different markup structures can impact SEO"
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to describe the types of templating being used to generate HTML documents and components EG: (Mustache, JSX)",
          "Able to examine a visual / interaction design and draw component boundaries.",
          "Understand accessibility  design considerations."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to examine a visual / interaction design and draw component boundaries, explaining the significance to the designer.",
          "Implements SEO and accessibility compliant designs."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to examine a visual / interaction implementation and refactor component boundaries, expaining the technical improvements  to the designer and engineering teams.",
          "Lead SEO and accessibility compliant designs. ",
          "Assess new technologies  in the design space."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to examine a visual / interaction implementation and refactor component boundaries to improve SEO / accessibility implementation,  explaining the technical and business improvements to the designer and engineering teams.",
          "Spike new layout and composition  technologies to help assess value to the business and engineering teams."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to guide the usage of any given templating, SEO and accessibility technique.",
          "Able to critically examine technology options around existing and future  layout and component techniques and map out a migration path."
        ]
      }
    ]
  },

  VISUAL_AND_RESPONSIVE_DESIGN: {
    displayName: "Visual & Responsive Design",
    category: "A",
    description:
      "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe why accurate visual designs is important.",
          "Demonstrate awareness of different input considerations such as touch",
          "Able to describe the different type of images used"
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to implement accurate visual designs on at least one target client",
          "Implement different input support that works with a visual design",
          "Able to implement  the correct type of images for a given scenario."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to understand and articulate the difference between static and dynamic content and can show examples of each."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to implement and articulate in detail, the application of responsive designs appropriate to the client being used.",
          "Implement components and applications that are visually accessible and input friendly, working with teams to improve designs",
          "Implement responsive images, leveraging knowledge of CDNs to improve visual experience"
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to measure the complexity of the code required to implement a responsive design.",
          "Aware of possible performance impact of responsive designs.",
          "Suggests engineering initiatives to improve visual accessibility and input support",
          "Implement responsive images, leveraging knowledge of CDNs to improve visual experience and optimise experience"
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Actively works with the team to ensure complexity of the code is reduced including design changes where appropriate.",
          "Actively works with team to ensure perofrmance conseuqences of responsive design are mitigated as much as possible",
          "Lead engineering initiatives to improve visual accessibility and input support, including large scale refctors.",
          "Lead advanced refactoring to optimise visual performance of site, using browser / CDN caching plus image source optimisations"
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to understand the consequences and trade offs of adopting and implementing a responsive design.",
          "Guides design teams to produce visual treatments offering the best balance between code complexity and customer experience."
        ]
      }
    ]
  },

  USER_INTERACTIONS: {
    displayName: "User Interaction",
    category: "A",
    description:
      "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to understand and articulate the difference between static and dynamic content and can show examples of each."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to implement reliable and progressively enhanced user interactions."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to implement reliable and progressively enhanced user interactions ensuring each users get the optimal experience for their device.",
          "Able to describe techniques for supporting clients that do not fully implement current web standards.",
          "Demonstrate understanding of reflows, repaints and triggering layout in browser"
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to understand and articulate the difference between browser detection and feature detection and strives to implement feature detection.",
          "Able to articulate the purpose of browser polyfills and how to check they are applicable.",
          "Optimise components  to avoid unnecessary reflows, repaints and using different layout triggers"
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Implements feature detection over browser detection.",
          "Able to articulate how to use browser polyfills as well as implement in a progresively enhanced manner. ",
          "Optimise applications and components to avoid unnecessary reflows, repaints and use different layout triggers"
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to articulate in detail how feature detection works and define strategies and implemention for a range of feature tests.",
          "understand and articulate the consequences of using browser polyfills and explain to peers.",
          "Refactor entire codebases  to  avoid unnecessary reflows, repaints and use different layout triggers."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to draw and articulate a complete, end-to-end solution architecture, clearly and concisely including how it supports non-functional requirements such as performance, scalability and resiliance.",
          "Able to design and justify a coherent, well-considered, end-to-end solution architecture which meets functional and non-functional requirements.",
          "Able to apply a combination of knowledge, experience and pertinent questioning to comprehend and challenge a complex customer experience on sight.",
          "Able to define best practice for multi-device support including a test strategy."
        ]
      }
    ]
  },

  SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS: {
    displayName: "Software Design & Architechtual Patterns",
    category: "A",
    description:
      "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: ["Able to describe what design patterns are."]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to implement and articulate at least one commonly used software design pattern and when it should be used."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to implement and articulate a range of software design patterns, when they should be used and what problems they address.",
          "Able to articulate a range of architectural patterns, when they should be used and what problems they address."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to implement and articulate a broad range of software design and architectural patterns, when they should be used, alternatives which could be considered and the practical considerations of implementing them."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to evaluate, implement and articulate the majority of software design and architectural patterns, when they should be used, alternatives which could be considered and the practical considerations of implementing them."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to evaluate, select, articulate and implement the majority of software design and architectural patterns, when they should be used, alternatives which could be considered and the practical considerations of implementing them. ",
          "Guides the team through implementation and approach, ensuring they understand the reasoning and benefits."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to articulate and guide the evaluation, selection and implementation of a broad range of software design and architectural patterns, when they should be used, alternatives which could be considered and the practical considerations of implementing them in a relevant language. "
        ]
      }
    ]
  },

  ARCHITECTURE: {
    displayName: "Architecture",
    category: "B",
    description:
      "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to explain why well-designed architecture is vital to the successful implementation of well-crafted software systems."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to draw and articulate a component-level software architecture, clearly and consicely, including  interactions, sequences and activities and showing consideration for the logical role of each component beyond the specifics of its implementation."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to draw and articulate a system-level software architecture, clearly and consicely, including interactions, sequences and activities and showing consideration for the logical role of each component beyond the specifics of its implementation."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to draw and articulate a complete, end-to-end solution architecture, clearly and concisely, including enterprise and integration patterns, transport and security protocols, consistency models and how it supports non-functional requirements such as performance, scalability and resiliance."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to draw and articulate a complete, end-to-end solution architecture, clearly and concisely, including enterprise and integration patterns, transport and security protocols, consistency models and how it supports non-functional requirements such as performance, scalability and resiliance.",
          "Able to design and justify a coherent solution architecture to meet a specific set of requirements."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to draw and articulate a complete, end-to-end solution architecture, clearly and concisely, including enterprise and integration patterns, transport and security protocols, consistency models and how it supports non-functional requirements such as performance, scalability and resiliance.",
          "Able to design and justify a coherent solution architecture to meet a specific set of requirements.",
          "Able to apply a combination of knowledge and pertinent questioning to comprehend a solution architecture on sight.",
          "Able to translate complex, distrbuted architectures into simple, maintainable, well-engineered software solutions. "
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to draw and articulate a complete, end-to-end solution architecture, clearly and concisely, including enterprise and integration patterns, transport and security protocols, consistency models and how it supports non-functional requirements such as performance, scalability and resiliance.",
          "Able to design and justify a coherent, well-considered, end-to-end solution architecture which meets functional and non-functional requirements.",
          "Able to apply a combination of knowledge, experience and pertinent questioning to comprehend and challenge a complex, distributed architecture on sight. ",
          "Able to translate complex, distrbuted architectures into simple, maintainable, well-engineered software solutions and, drawing on experience, guide their implementation as part of a larger architecture implementation, co-ordinating and collaborating with other engineering teams and areas of the business, to realise the functional and non-functional requirements as a production-ready delivery. "
        ]
      }
    ]
  },

  MESSAGING_AND_INTEGRATION: {
    displayName: "Messaging & Integration",
    category: "B",
    description:
      "Shares the right amount of information with the right people, at the right time, and listens effectively",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to understand and describe  the differences between components communicating in-process and across network boundaries."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to implement and articulate  architectural patterns and styles including Request-Response, Async, Event-Driven and REST."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to implement and articulate  architectural patterns and styles including Request-Response, Async, Event-Driven and REST.",
          "Able to implement and articulate pipelines, transformation, idempotency  and application routing.",
          "Able to inspect the state of integration processes using tools and techniques appropriate to the platform or implementation."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to implement and articulate architectural patterns and styles including Request-Response, Async, Event-Driven and REST.",
          "Able to implement and articulate pipelines, transformation, idempotency, serialisation, content-based routing, channel security and message integrity.",
          "Able to debug and diagnose issues in integration using tools and techniques appropriate to the platform or implementation."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to implement and articulate  architectural patterns and styles including Request-Response, Fire and Forget, Publish-Subscribe, Store and Forward, Command Query Separation, Async, Event-Driven, REST and SOA.",
          "Able to implement and articulate pipelines, transformation, idempotency, serialisation, content-based routing, channel security and message integrity.",
          "Able to debug and diagnose issues in integration using tools and techniques appropriate to the platform or implementation.",
          "Able to implement and articulate mitigation approaches for problem scenarios such as transient faults, transfer failures, poison messages and floodgates."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to implement and articulate  architectural patterns and styles including Request-Response, Fire and Forget, Publish-Subscribe, Store and Forward, Command Query Separation, Async, Event-Driven, REST and SOA and select appropriate approaches to meet requirements.",
          "Able to implement and articulate pipelines, transformation, idempotency, serialisation, content-based routing, channel security and message integrity and ensure that these approaches align with those in upstream/downstream systems.",
          "Able to debug and diagnose issues in integration using tools and techniques appropriate to the platform or implementation.",
          "Able to implement and articulate mitigation approaches for problem scenarios such as transient faults, transfer failures, poison messages and floodgates and ensure that these provide the best possible foundation for operational support."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to articulate  and guide the implemention of architectural patterns and styles including Request-Response, Fire and Forget, Publish-Subscribe, Store and Forward, Command Query Separation, Async, Event-Driven, REST and SOA and select appropriate approaches to meet requirements, which are co-ordinated across teams and align to the overall roadmap.",
          "Able to articulate and guide the implemention of pipelines, transformation, idempotency, serialisation, content-based routing, channel security and message integrity and ensure that these approaches align with those in upstream/downstream systems.",
          "Able to draw on knowledge and experience to aid troubleshooting issues in integration using tools and techniques appropriate to the platform or implementation.",
          "Able to articulate and guide the implementation of mitigation approaches for problem scenarios such as transient faults, transfer failures, poison messages and floodgates and ensure that these provide the best possible foundation for operational support."
        ]
      }
    ]
  },

  PERFORMANCE: {
    displayName: "Performance",
    category: "B",
    description:
      "Embodies and promotes practices to ensure excellent quality products and services",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to understand and describe the HTTP request/response model"
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to measure HTTP performance and can describe techniques to improve the results."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to describe how to measure perfomance relevant to the business requirements across the UI stack.",
          "Implements best practices for improving HTTP performance."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to implement perfomance tests optimised for the business requirements across the UI stack."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Implements performance improvements defined through a set of well defined performance test strategies.",
          "Proactively investigates the impact of business change to performance before implementing any changes."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to articulate and implement best practice for non-browser based caching and routing layers."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to provide guidance and hands-on support to measure, debug and optimise the performance of the UI layers of an application including transport protocols, renderers and in-page interactions."
        ]
      }
    ]
  },

  SCALABILITY: {
    displayName: "Scalability",
    category: "B",
    description:
      "Challenges the status quo and effects positive organizational change outside of mandated work",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe the differences between performance and scalability. ",
          "Demonstrates consideration of both when writing code.",
          "Able to measure and optimise the performance of small units of code."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to articulate the differences between performance and scalability. ",
          "Demonstrates consideration of both when writing code.",
          "Able to measure and optimise the performance of complete components."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to articulate the differences between performance and scalability.",
          "Demonstrates an understanding of both when writing code.",
          "Able to measure and optimise the performance of multiple, integrated components.",
          "Able to implement scalability in software solutions based on pre-defined approaches."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to articulate the differences between performance and scalability and the trade-offs between the two.",
          "Demonstrates an understanding of both when writing code.",
          "Able to measure, debug and optimise the performance of multiple, integrated components.",
          "Able to implement and measure scalability in software solutions based on non-functional requirements."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to articulate the differences between performance and scalability and the trade-offs between the two.",
          "Demonstrates a understanding of both when writing code, based on a deep technical knowledge of the implementation of underlying components of the development framework.",
          "Able to measure, debug and optimise the performance of multiple, integrated components across system boundaries, drawing on a technical knowledge of the implementation of interactions between system boundaries and instrumentation techniques.",
          "Able to implement, measure, debug and optimise scalability in software solutions based on non-functional requirements, across multiple, distributed systems."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to articulate the differences between performance and scalability and the trade-offs between the two.",
          "Demonstrates an understanding of both when writing code, based on a deep technical knowledge of the implementation of underlying components of the development framework and the effects of hardware and infrastructure capabilities. Actively guides the team in taking the most suitable approaches to implementation.",
          "Able to measure, debug and optimise the performance of multiple, integrated components across system boundaries, drawing on a technical knowledge of the implementation of interactions between system boundaries and instrumentation techniques.",
          "Able to design, implement, measure, debug and optimise scalability in software solutions based on non-functional requirements, across multiple, distributed systems."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to articulate the differences between performance and scalability and be confident in making informed and pragmatic decisions on the optimal balance between the two to meet a given set of requirements.",
          "Demonstrates an authoritative understanding of both in real-world scenarios, drawing from knowledge and experience of development frameworks and hardware and infrastructure capabilities. Pro-actively establishes best practices the team in taking the most suitable approaches to implementation.",
          "Able to provide guidance and hands-on support to measure, debug and optimise the performance of multiple, integrated components across system boundaries, drawing on a technical knowledge of the implementation of interactions between system boundaries and instrumentation techniques.",
          "Able to provide guidance and hands-on support in the design, implemention, measurement, troubleshooting and optimisation of scalability in software solutions based on non-functional requirements, across multiple, distributed systems."
        ]
      }
    ]
  },

  DATA: {
    displayName: "Data",
    category: "C",
    description:
      "Provides strategic support to engineers to help them build the career they want",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe the basics of consuming a REST API and describe a simple REST data model.",
          "Able to articulate the main HTTP verbs and when they should be used."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to design and implement basic operations on a REST API and apply RESTFul guidelines.",
          "Able to articulate the difference between relational and non-relational data stores.",
          "Able to design and implement simple  data models."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to articulate the main types of structured data storage - including Relational, Key-Value, Column, Document and Object, as well as the ACID approach to consistency.",
          "Able to design and implement multiple-entity data models.",
          "Able to implement CRUD operations on a data store and apply filtering, ordering and aggregation."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: ["Able to describe what design patterns are."]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to articulate, in detail, the main types of structured data storage - including Relational, Key-Value, Column, Document and Object - as well as the two main approaches to consistency - ACID and BASE - and the trade-offs between the two.",
          "Able to design and implement complex data models which include multiple entities, relationships and/or hierarchies.",
          "Able to design implement and debug CRUD operations designed for concurrency on a data store and apply filtering, ordering, aggregation, transformation and composition."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to articulate, in detail, the main types of structured data storage - including Relational, Key-Value, Column, Document and Object - as well as the two main approaches to consistency - ACID and BASE - and the trade-offs between the two.",
          "Able to design and implement complex, distributed data models which include multiple entities, relationships and/or hierarchies and demonstrate consideration for consistency, availability and partition tolerance requirements.",
          "Able to design, implement and debug complex or long-running CRUD operations designed for concurrency on multiple, distributed data stores and apply filtering, ordering, aggregation, transformation and composition."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to articulate and guide the selection and implementation of the main types of structured data storage - including Relational, Key-Value, Column, Document and Object - as well as the two main approaches to consistency - ACID and BASE - and the trade-offs between the two.",
          "Able to draw on experience and knowledge to provide guidance and hands-on support in the design and implementation of complex, distributed data models which include multiple entities, relationships and/or hierarchies and demonstrate consideration for consistency, availability and partition tolerance requirements.",
          "Able to draw on experience and knowledge to provide guidance and hands-on support in the design, implementation and best practices of complex or long-running CRUD operations designed for concurrency on multiple, distributed data stores which apply filtering, ordering, aggregation, transformation and composition."
        ]
      }
    ]
  },

  TOOLS_AND_TECHNOLOGIES: {
    displayName: "Tools & Technologies",
    category: "C",
    description:
      "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe the basic purposes of the tools and technologies used by the team, including software development and test automation frameworks, continuous integration and delivery, data management, and reporting, diagnostics and telemtry and any other tools used to support development and support."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to articulate the purposes of the tools and technologies used by the team.",
          "Able to use the basic functionality of these tools and technologies effectively in day-to-day engineering."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to articulate, in detail, the tools and technologies used by the team, where they are used and for what purpose.",
          "Able to use these tools and technologies confidently and effectively in day-to-day engineering."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to articulate, in detail, the tools and technologies used by the team, why they were selected, where they are used and for what purpose and also describe the tools and technologies used by related teams.",
          "Able to draw upon a deep knowledge of these tools to implement complex engineering approaches confidently and effectively."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to articulate, in detail, the tools and technologies used by the team and related teams, why they were selected, where they are used and for what purpose, as well as alternative options and how they compare.",
          "Able to draw upon a deep knowledge and understanding of these tools to determine the approach to, and implementation of, complex engineering approaches confidently and effectively.",
          "Able to evaluate tools and technologies to meet the  engineering challenges of the team."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Able to articulate, in detail, the tools and technologies used by the team and related teams, why they were selected, where they are used and for what purpose, as well as alternative options and how they compare.",
          "Able to draw upon a deep knowledge and understanding of these tools to determine the approach to, and implementation of, complex engineering challenges, confidently and effectively.",
          "Able to evaluate and select tools and technologies to meet the  engineering challenges of the team, taking into account requirements, complexity, maintenance and architectural direction."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Able to articulate, in detail, the tools and technologies used by all teams in a given area of responsibility, why they were selected, where they are used and for what purpose, as well as alternative options and how they compare.",
          "Able to draw upon knowledge and experience so as to act as an authoritative and effective guide to teams in the approach to, and the implementation of, complex engineering challenges.",
          "Able to evaluate and select tools and technologies to meet the  engineering challenges across teams, balancing this with organisational requirements, complexity, maintenance and architectural direction",
          "Demonstrates consideration of the total cost of ownership and economy of scale in evaluating both new and existing tools and technologies. Ensures that there is is a high degree of transparency in the process, that the greatest scope of shared benefit is achieved and that there is no contention with similar activities activies in other areas of the business."
        ]
      }
    ]
  },

  BROWSER_SUPPORT: {
    displayName: "Browser Support",
    category: "C",
    description:
      "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe the difference between and benefits of responsive and adaptive web development."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to describe a mobile first engineering approach and strives to apply the technique.",
          "Strives to practice responsive web development techniques."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Strives to implement engineering solutions mobile first with an optimum experience for each target client.",
          "Practices a responsive web development approach."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to understand and articulate the difference between cross-browser and multi-browser support."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Sets an example to the team in implementing multi-browser, progressively enhanced engineering solutions."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Actively contributes to platform support standards making use of analytics data to drive decisions on where progressively enhanced features can be significantly different between platforms."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Actively engages with customer intelligence data to ensure platform support standards are relevant to the widest possible range of customers.",
          "Articulates and actively guides the development of platform optimisation and compatibility standards."
        ]
      }
    ]
  },

  DEVELOPMENT_LIFECYCLE: {
    displayName: "Development Lifecycle",
    category: "C",
    description:
      "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to explain the benefits of having separate environments for development, test and production.",
          "Able to explain the benefits of separating source control and configuration management and how they come together at build/deploy time.",
          "Able to describe what kinds of  documentation can be used to describe a system and what information is needed to release it into a new environement."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to describe the development, test and production environments used by the teams and how they are provisioned.",
          "Able to build, package and deploy software through environments; manage configuration settings and check the success of a deployment.",
          "Able to find, understand and contribute to the team's documentation about the products it develops. "
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Able to articulate the development, test and production environments used by the team and how they are provisioned. Able to execute the provisioning of new environments through a repeatable, automated process.",
          "Able to build, package and deploy software through environments; make small changes and improvements to the build and deploy process; define and manage configuration settings and verify the success of a deployment.",
          "Able to find, understand and contribute to the team's documentation about the products it develops as well as the documentation created by other teams. "
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Able to articulate the development, test and production environments used by the team and how they are provisioned. Able to modify and execute the provisioning of new environments through a repeatable, automated process and troubleshoot environmental issues.",
          "Able to build, package and deploy software through environments; make changes and improvements to the build and deploy process; define and manage configuration settings and troubleshoot deployment issues.",
          "Able to define and contribute to the team's documentation about the products it develops as well as the documentation created by other teams.",
          "Able to prepare for and support a production release, including creating appropriate documentation; communicating changes and setting expectations clearly and in good time; co-ordinating with other teams and ensuring a graceful rollback is possible."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Able to articulate the development, test and production environments used by the team and how they are provisioned. Able to modify and execute the provisioning of new environments through a repeatable, automated process and troubleshoot environmental issues.",
          "Able to build, package and deploy software through environments; make changes and improvements to the build and deploy process; define and manage configuration settings and troubleshoot deployment issues.",
          "Able to define and contribute to the team's documentation about the products it develops as well as the documentation created by other teams.",
          "Able to prepare for and support a production release, including creating appropriate documentation; communicating changes and setting expectations clearly and in good time; co-ordinating with other teams and ensuring a graceful rollback is possible."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Responsible for defining, planning and co-ordinating the development, test and production environments used by the team and the process of provisioning them, in close collaboration with the Solution Architect to ensure they align with the defined architecture.",
          "Able to baseline, script, execute and pro-actively refine the provisioning of new environments through a repeatable, automated process and troubleshoot environmental issues.",
          "Actively shares this knowledge, ensuring that all team members fully understand the process and can execute it with confidence.",
          "Responsible for the build, package and deploy process of software through environments, including identifying and co-ordinating technical dependencies with other teams; identifying, co-ordinating and implementing changes and improvements to the process; defining, managing and co-ordinating configuration settings and troubleshooting deployment issues, pro-actively collaborating with other teams as appropriate.",
          "Responsible for the team's documentation about the products it develops, ensuring that it is coherent, visible and up-to-date. Able to find and understand other teams' documentation and contribute to it if required.",
          "Responsible for ensuring, as far as practically possible, the successful release of the team's software into production, including creating appropriate documentation; communicating changes and setting expectations clearly and in good time; co-ordinating with other teams and ensuring a graceful rollback is possible."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Ensures that the process of building, packaging and deploying software through environments, across teams, is done in a consistent, transparent way which adheres to the processes and principles set out by engineering leadership. ",
          "Works with teams to promote best practice, improve automation and reduce risk in the release of software. Ensures that knowledge is shared across teams and with the wider engineering organisation and that new approaches are agreed and adopted.",
          "Actively ensures that technical depencies are co-ordinated between teams and that a clear, timely, collaborative and repeatable technical approach is followed when releasing software so that risk is mitigated."
        ]
      }
    ]
  },

  CODE_QUALITY: {
    displayName: "Code Quality",
    category: "D",
    description:
      "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to explain the purpose and benefits of test-driven development, automated unit testing and static code quality analysis tools."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to understand and articulate the purpose and benefits of test-driven development, automated unit testing and static code quality analysis tools and use these tools and approaches consistently to improve code quality"
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Creates tested software engineering solutions. Rigoroulsy applies static code quality analysis tools."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Creates fully automated tested software engineering solutions with a focus on continuous integration and continuous deployment. Rigoroulsy applies static code quality analysis tools."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Practices a test first approach to software engineering solutions with a focus on automation, continuous integration and continuous deployment. Rigoroulsy applies and maintains static code quality analysis tools."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Sets an example to the team in practising a test first approach to software engineering solutions with a focus on automation continuous integration and continuous deployment and ensures the team.",
          "Rigoroulsy applies and maintains static code quality analysis tools and uses the results to help develop the team.",
          "Has a full understanding of how code style impacts debugging and general problem solving and promotes good coding style within the team."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Promotes a test-first approach to software engineering solutions and a co-ordinated approach to automation, continuous integration and continuous deployment across teams and the wider technology organisation. Monitors and refines static code quality analysis tools continuously to identify areas of improvement and pro-actively works with teams to help develop and strengthen them. Has a full understanding of how code style impacts debugging and general problem solving and promotes these across teams."
        ]
      }
    ]
  },

  CODE_CRAFTSMANSHIP: {
    displayName: "Code Craftsmanship",
    category: "D",
    description:
      "Promotes asos to the outside world and establishes it as an attractive and thoughtful place to work",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Able to describe why well-crafted software mitigates the need for extensive documentation."
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: [
          "Able to articulate why well-crafted software mitigates the need for extensive documentation and strives to craft code which meets these goals."
        ]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Implements well-crafted software which does not require extensive documentation and strives to adhere to the principles of SOLID, YAGNI, KISS and DRY."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Implements well-crafted software which does not require extensive documentation and which adheres to the principles of SOLID, YAGNI, KISS and DRY."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Sets an example to the team in implementing well-crafted software which does not require extensive documentationand which adheres to the principles of SOLID, YAGNI, KISS and DRY. "
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Actively works with the team to ensure that it produces well-crafted software which does not require extensive documentation and which adheres to the principles of SOLID, YAGNI, KISS and DRY.",
          "Balances bespoke development with readily available packages."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Actively guides the teams to produce well-crafted software which does not require extensive documentation and which adheres to the principles of SOLID, YAGNI, KISS and DRY. Ensures that engineering choices an approaches balance bespoke development with readily available packages."
        ]
      }
    ]
  },

  CODE_REVIEW: {
    displayName: "Code Review",
    category: "D",
    description:
      "Strengthens asos's team by bringing in excellent staff members",
    milestones: [
      {
        summary:
          "An enthusiatic learner who is keen to develop a range of engineering and soft skills.",
        signals: [
          "Understands feedback from code reviews and consequently implements appropriate changes in code and approaches"
        ]
      },
      {
        summary:
          "A motivated engineeer who is actively developing their technical and soft skills to help their team deliver well-crafted software.",
        signals: ["Participates in code reviews with only some input."]
      },
      {
        summary:
          "An experienced engineer who is committed to developing their technical and soft skills and delivering well-crafted software.",
        signals: [
          "Participates on code reviews and actively reviews code written by other engineers."
        ]
      },
      {
        summary:
          "An experienced engineer with deep technical skills who pro-actively contributes to the team and is passionate about delivering high-quality, well-crafted software.",
        signals: [
          "Participates on code reviews and actively reviews code written by other engineers. Drives the code review process within their team."
        ]
      },
      {
        summary:
          "A highly experienced engineer with exceptional technical skills with the drive and passion to deliver exceptional software. Widely recognised for engineering excellence outside of the team as well as within.",
        signals: [
          "Participates on code reviews and actively reviews code written by other engineers. Drives the code review process within their team and across the whole discipline."
        ]
      },
      {
        summary:
          "A respected leader and highly experienced engineer with exceptional technical skills and an open, collaborative approach who has the drive and passion to bring out the very best in their team and the software it delivers.",
        signals: [
          "Participates on code reviews and actively reviews code written by other engineers. Drives the code review process within the team."
        ]
      },
      {
        summary:
          "A confident, authoritative and respected subject matter expert in engineering with a breadth and depth of technical skills and delivery experience, honed through the design and implementation of complex architectures across multi-discipline teams.",
        signals: [
          "Ensures that the code review process is active, efficient and beneficial. Continuously reviews the code produced by teams, including third party teams, to ensure that it adheres to ASOS patterns and pratices."
        ]
      }
    ]
  }
};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map();
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId];
    const categoryId = tracks[trackId].category;
    let currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    );
  });
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 };
  });
};

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0);

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#49B3EB", "#4BA85A", "#F8C346", "#DF659F"]);

export const titles = [
  { label: "Web Engineering", minPoints: 0, maxPoints: 200 },
  { label: "QA Engineering", minPoints: 0, maxPoints: 200 }
];

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label);
};
