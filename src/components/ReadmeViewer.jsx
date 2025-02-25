// @ts-ignore
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReadmeNavigation from "./ReadmeNavigation";
import "github-markdown-css";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";

import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-scroll";

const ReadmeViewer = ({ projectData }) => {
  const [markdown, setMarkdown] = useState("");
  const [toc, setToc] = useState([]);

  useEffect(() => {
    fetch(projectData.readmeUrl)
      .then((response) => response.text())
      .then((text) => {
        const { filteredMarkdown, extractedToc } = processMarkdown(text);
        setMarkdown(filteredMarkdown);
        setToc(extractedToc);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {markdown && toc && (
        <>
          <ReadmeNavigation
            navigationLinks={toc}
            projectId={projectData.name}
          />
          <MarkdownBody id="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // @ts-ignore
                img: ({ src, alt, width, ...props }) => (
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      maxWidth: "80%",
                      width: width,
                    }}
                  />
                ),
                code({ className, children, node, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  if (match) {
                    return (
                      <SyntaxHighlighter
                        style={monokai}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    );
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                // @ts-ignore
                h2: ({ node, ...props }) => {
                  var title = "";

                  if (
                    node.toString().includes("BackofficeCreationFieldExclude")
                  ) {
                    console.log(node);
                  }

                  if (
                    // @ts-ignore
                    node.children[0].tagName &&
                    // @ts-ignore
                    node.children[0].tagName === "strong"
                  ) {
                    // @ts-ignore
                    title = node.children[0].children[0].value;
                  } else {
                    // @ts-ignore
                    title = node.children[0].value;
                  }

                  return (
                    <h2 id={title.toLowerCase().replace(/ /g, "-")}>
                      <b>{title}</b>
                    </h2>
                  );
                },
                // @ts-ignore
                h3: ({ node, ...props }) => {
                  var title = "";

                  if (
                    node.toString().includes("BackofficeCreationFieldExclude")
                  ) {
                    console.log(node);
                  }
                  if (
                    // @ts-ignore
                    node.children[0].tagName &&
                    // @ts-ignore
                    node.children[0].tagName === "strong"
                  ) {
                    // @ts-ignore
                    title = node.children[0].children[0].value;
                  } else {
                    // @ts-ignore
                    title = node.children[0].value;
                  }

                  return (
                    <h3 id={title.toLowerCase().replace(/ /g, "-")}>
                      <b>{title}</b>
                    </h3>
                  );
                },
                h4: ({ children }) => {
                  return <p>{children}</p>;
                },
                h5: ({ children }) => {
                  return <p>{children}</p>;
                },
                a: ({ href, children }) => {
                  if (href && href.startsWith("#")) {
                    return (
                      <Link
                        to={href.substring(1)}
                        duration={500}
                        smooth={true}
                        spy={true}
                        containerId="markdown-body"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return <a href={href}>{children}</a>;
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </MarkdownBody>
        </>
      )}
    </div>
  );
};

const processMarkdown = (mdText) => {
  const lines = mdText.split("\n");
  let inToc = false;
  let extractedToc = [];
  let filteredMarkdown = [];

  lines.forEach((line) => {
    if (line.startsWith("### Table of Content")) {
      inToc = true;
      return;
    }
    if (inToc && line.trim() === "") {
      inToc = false;
      return;
    }

    if (inToc) {
      const match = line.match(/- \[(.*?)\]\(#(.*?)\)/);
      const subMatch = line.match(/^\s+- \[(.*?)\]\(#(.*?)\)/);

      if (match) {
        extractedToc.push({
          title: match[1],
          id: match[2],
          level: subMatch ? 2 : 1,
        });
      }
    } else {
      filteredMarkdown.push(line);
    }
  });

  return {
    filteredMarkdown: filteredMarkdown.join("\n"),
    extractedToc,
  };
};

export default ReadmeViewer;

const MarkdownBody = styled.div`
  padding: 20px;
  overflow: scroll;
  text-align: justify;
  text-justify: inter-word;

  a {
    text-decoration: underline;
    color: inherit;
  }

  table {
    margin-top: 1rem;
    margin-left: 20px;

    width: calc(100% - 20px);
    border: 1px solid white;
    border-collapse: collapse;

    @media screen and (max-width: 600px) {
      max-width: 100vw;
      overflow-x: scroll;
    }

    td,
    th {
      border: 1px solid white;
      padding: 5px 10px;
    }

    td:first-child,
    th:first-child {
      border-left: none;
    }
  }
`;
