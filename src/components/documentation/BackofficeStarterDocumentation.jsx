import styled from "styled-components";
import DocumentText from "./components/DocumentText";
import DocumentTitle from "./components/DocumentTitle";
import CodePreview from "./components/CodePreview";
import { Link } from "react-scroll";
import loginPageImage from "./assets/backoffice-starter-login-page.png";
import consoleAtStartImage from "./assets/backoffice-console-start.png";
import navBeforeRefresh from "./assets/navigation-before-refresh.png";
import navAfterRefresh from "./assets/navigation-after-refresh.png";
import emptyDataManagement from "./assets/data-management-empty.png";
import populatedDataManagement from "./assets/data-management-populated.png";
import entityCreationPopup from "./assets/entityCreationPopup.png";
import mediaCreationPopup from "./assets/mediaCreationPopup.png";
import translationCreationPopup from "./assets/translationCreationPopup.png";
import ImagePreview from "./components/ImagePreview";
import ForeignLink from "./components/ForeignLink";

const BackofficeStarterDocumentation = () => {
  return (
    <Container>
      {/* Introduction Section */}
      <DocumentTitle level={1} id="introduction">
        Introduction
      </DocumentTitle>
      <DocumentTitle level={2}>Overview of the project</DocumentTitle>
      <DocumentText>
        The Backoffice Spring Boot Starter is designed to simplify backend
        management, providing a developer-friendly interface that eliminates the
        need for direct database interaction through SQL queries or database
        management tools. It also enables non-developers (such as business users
        and administrators) to monitor and manage the application effectively.
      </DocumentText>
      <br />
      <DocumentText>
        By streamlining workflows, the Backoffice Starter enhances productivity,
        allowing teams to implement changes, track database modifications, and
        resolve issues more efficiently.
      </DocumentText>

      <DocumentTitle level={2} id="key-objectives">
        Key Objectives
      </DocumentTitle>
      <ol>
        <li>
          <b>Simplify Backend Workflows</b>
          <ul>
            <li>
              Perform essential backend tasks without direct database access.
            </li>
            <li>
              Easily track and manage changes made by the main application.
            </li>
          </ul>
        </li>
        <li>
          <b>Developer and QA Efficiency</b>
          <ul>
            <li>
              Provide centralized tools for developers and QA engineers to speed
              up their workflows.
            </li>
            <li>Reduce reliance on external database management tools.</li>
          </ul>
        </li>
        <li>
          <b>Future Growth</b>
          <ul>
            <li>
              Expand functionality to include features for business users,
              enabling them to analyze data and collaborate with development
              teams.
            </li>
            <li>
              Decouple from Hibernate and implement an abstract JPA solution to
              support multiple JPA implementations like Spring Data JPA,
              MyBatis, EclipseLink, and others.
            </li>
          </ul>
        </li>
      </ol>

      <DocumentTitle level={2} id="current-features">
        Current Features
      </DocumentTitle>
      <ul>
        <li>
          <b>Plug-and-Play Integration</b>
          <ul>
            <li>Get started quickly with minimal setup and configuration.</li>
          </ul>
        </li>
        <li>
          <b>Translation Management</b>
          <ul>
            <li>
              Easily manage and update translations across the application.
            </li>
          </ul>
        </li>
        <li>
          <b>Media Management</b>
          <ul>
            <li>
              Upload, organize, and manage media files (e.g., images,
              documents).
            </li>
          </ul>
        </li>
        <li>
          <b>Cron Job Support</b> (coming soon)
          <ul>
            <li>
              Create, schedule, and monitor both simple and complex cron jobs.
            </li>
          </ul>
        </li>
      </ul>

      <DocumentText>
        The <b>Backoffice Spring Boot Starter</b> bridges the gap between
        development, testing, and business operations, providing a powerful and
        flexible solution for managing backend processes.
      </DocumentText>

      <DocumentTitle level={2} id="intended-audience">
        Intended Audience
      </DocumentTitle>
      <DocumentText>
        The Backoffice Spring Boot Starter is designed for{" "}
        <b>small businesses</b>, <b>startups</b>, and <b>mid-sized companies</b>{" "}
        looking to accelerate development and streamline backend operations.
      </DocumentText>
      <ul>
        <li>
          <b>For Startups:</b>
          <ul>
            <li>
              Ideal for new projects that need a quick and efficient setup.
            </li>
            <li>
              Requires only <b>Spring Boot</b> and <b>Hibernate</b>—the starter
              handles the rest.
            </li>
          </ul>
        </li>
        <li>
          <b>For Existing Projects:</b>
          <ul>
            <li>Easily adaptable for mid-sized or established applications.</li>
            <li>
              Some adjustments may be needed for seamless integration, which
              will be covered in later sections.
            </li>
          </ul>
        </li>
      </ul>
      <DocumentText>
        Whether you're launching a new project or improving an existing one, the
        Backoffice Spring Boot Starter offers a{" "}
        <b>flexible and developer-friendly</b> solution to enhance backend
        workflows.
      </DocumentText>

      <DocumentTitle level={2} id="prerequisites">
        Prerequisites
      </DocumentTitle>
      <DocumentText>
        Before getting started, ensure you have the following knowledge and
        tools.
      </DocumentText>
      <DocumentText>
        <b>Required Knowledge</b>
      </DocumentText>
      <ul>
        <li>
          <b>Java</b> – A strong understanding of Java is essential for backend
          development.
        </li>
        <li>
          <b>Spring Boot</b> – While prior experience with Spring Boot is
          required, it's a core technology for most backend applications.
        </li>
        <li>
          <b>Hibernate</b> – Since the starter integrates with Hibernate,
          familiarity with it is necessary.
        </li>
        <li>
          <b>ReactJS</b> – The frontend is built with React, so basic knowledge
          is required for customization and feature extensions.
        </li>
      </ul>
      <DocumentText>
        <b>Tools Needed</b>
      </DocumentText>
      <ul>
        <li>
          <b>JDK</b> – A Java Development Kit compatible with your project's
          Spring Boot version.
        </li>
        <li>
          <b>Maven or Gradle</b> – For dependency management and project builds.
        </li>
        <li>
          <b>Node.js</b> – Required for React frontend development and build
          processes.
        </li>
      </ul>
      <DocumentText>
        With these prerequisites in place, you're ready to integrate and start
        using the Backoffice Spring Boot Starter. 🚀
      </DocumentText>

      {/* Getting Started Section */}
      <DocumentTitle level={1} id="getting-started">
        Getting Started
      </DocumentTitle>
      <DocumentTitle level={2} id="installation">
        Installation
      </DocumentTitle>
      <DocumentText>
        The Backoffice Spring Boot Starter is designed for easy installation and
        setup in just a few steps.
      </DocumentText>

      <DocumentTitle level={4}>
        <b>Step 1:</b> Adding dependency to
        memento-backoffice-spring-boot-starter
      </DocumentTitle>
      <DocumentText>
        Add the following dependency to your project based on your build system:
      </DocumentText>
      <CodePreview>
        <DocumentText>pom.xml</DocumentText>
        <br />
        <DocumentText>{"<dependency>"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"<groupId>com.memento.tech</groupId>"}
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"<artifactId>memento-backoffice-spring-boot-starter</artifactId>"}
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"<version>${project.version}</version>"}
        </DocumentText>
        <DocumentText>{"</dependency>"}</DocumentText>
      </CodePreview>

      <CodePreview>
        <DocumentText>build.gradle</DocumentText>
        <br />
        <DocumentText>
          {
            'dependencies { implementation "com.memento.tech:memento-backoffice-spring-boot-starter:${project.version}" }'
          }
        </DocumentText>
      </CodePreview>

      <DocumentTitle level={4}>
        <b>Step 2:</b> Configuration of backoffice
      </DocumentTitle>
      <DocumentText>
        To enable the Backoffice module, add the following configuration
        properties to your <code>application.yaml</code> or{" "}
        <code>application.properties</code> file.
      </DocumentText>
      <ul>
        <li>
          <b>memento.tech.backoffice.enabled</b>
          <ul>
            <li>
              Enables Backoffice and loads all required beans into the Spring
              context. Set to <code>true</code> to activate Backoffice with
              basic functionalities.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.media.enabled</b>
          <ul>
            <li>Enables media management within Backoffice.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.media.internal.storage.enabled</b>
          <ul>
            <li>
              Enables the default implementation for media storage. If no custom
              media management is provided by the user, this property must be
              set to <code>true</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.media.file.import.upload.directory</b>
          <ul>
            <li>
              Defines the storage location for uploaded media files. Required
              when internal storage is enabled.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.media.mapping</b>
          <ul>
            <li>
              Defines the URL mapping for accessing uploaded media. Example
              format:{" "}
              <code>
                {"http://application.domain/{mediaMappingProperty}/{mediaId}"}
              </code>
              .
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.translation.enabled</b>
          <ul>
            <li>Enables the translation management tool.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.translation.useDefaultIfBlank</b>
          <ul>
            <li>
              If set to <code>true</code>, and a translation is missing for a
              specific language, the default language translation will be used.
              If no default translation is found, the translation key itself
              will be returned. If set to <code>false</code>, only the requested
              translation will be checked.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.translation.default.language</b>
          <ul>
            <li>
              Sets the default language for translations (must follow ISO
              language standards).
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.auth.token.secret</b>
          <ul>
            <li>
              Defines the authentication token secret. A default value is
              provided, but it is recommended to set a custom one.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.auth.cookie.name</b>
          <ul>
            <li>
              Sets the HTTP-only cookie name. The default is{" "}
              <code>"backofficeAccessCookie"</code>. More details can be found
              in the Backoffice Auth Configuration section.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.auth.cookie.expiry</b>
          <ul>
            <li>
              Defines the cookie expiration time in milliseconds. The default
              value is <code>0</code> milliseconds.
            </li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.development.mode</b>
          <ul>
            <li>
              Enables development mode. If set to <code>true</code> (default), a
              test user is created with username: <code>"test"</code> and
              password: <code>"password"</code>. It is recommended to disable
              this (<code>false</code>) in production environments.
            </li>
          </ul>
        </li>
      </ul>

      {/* Quick Start Guide Section */}
      <DocumentTitle level={2} id="quick-start-guide">
        Quick Start Guide
      </DocumentTitle>
      <DocumentText>
        <ForeignLink href="https://github.com/memento-tech/memento-backoffice-spring-boot-starter/tree/main">
          https://github.com/memento-tech/memento-backoffice-spring-boot-starter/tree/main
        </ForeignLink>
      </DocumentText>
      <br />
      <DocumentText>
        The source code of the <b>Backoffice Spring Boot Starter</b> is
        available at the provided link. Along with the source code, there is a{" "}
        <b>Quick Start Project</b> called <code>"demo-project"</code>.
        Developers can clone the <code>demo-project</code> along with the
        Backoffice Starter source code and run it as a standard Spring Boot
        application.
      </DocumentText>
      <ul>
        <li>
          <b>Pull source code using GitHub</b>
          <ul>
            <li>
              <code>
                {
                  "git clone https://github.com/memento-tech/memento-backoffice-spring-boot-starter.git"
                }
              </code>
            </li>
          </ul>
        </li>
        <li>
          <b>IDE Import</b>
          <ul>
            <li>Using your preferred IDE import project using Maven.</li>
          </ul>
        </li>
        <li>
          <b>Maven Build</b>
          <ul>
            <li>
              Since this way backoffice starter is not prebuilt, run Maven
              command: <code>{"mvn clean install"}</code>
            </li>
          </ul>
        </li>
        <li>
          <b>Run</b>
          <ul>
            <li>
              Finally, run <code>demo-application</code> through your preferred
              IDE. Backoffice UI will be available on address{" "}
              <code>{"http://localhost:8080/backoffice/login"}</code>
            </li>
          </ul>
        </li>
      </ul>
      <DocumentText>
        The <code>demo-project</code> provides a fully functional example,
        allowing developers to explore the features and configurations of the
        Backoffice Spring Boot Starter before integrating it into their own
        applications.
      </DocumentText>

      <DocumentTitle level={2} id="ui-guide">
        UI Guide
      </DocumentTitle>
      <DocumentText>
        This section provides an overview of the Backoffice UI, explaining its
        pages and key components. The UI is designed with <b>UX in mind</b>,
        ensuring that most elements are intuitive and self-explanatory.
      </DocumentText>

      <DocumentTitle level={3}>Login Page</DocumentTitle>
      <DocumentText>
        The <b>Login Page</b> is a minimalistic interface containing only the
        login form. It serves as the entry point for accessing the Backoffice.
      </DocumentText>
      <DocumentText>
        For more details on the authentication process and login mechanics,
        refer to the{" "}
        <Link
          to="#authentication"
          duration={500}
          smooth={true}
          spy={true}
          containerId="documentContainer"
        >
          Authentication section
        </Link>
        .
      </DocumentText>

      <ImagePreview width="50%" image={loginPageImage} />

      {/* {!da} */}
      <DocumentTitle level={3}>Console Page</DocumentTitle>
      <DocumentText>
        The <b>Console Page</b> is the central and currently the only page of
        the Backoffice Starter. It is structured into two main sections:
      </DocumentText>
      <ul>
        <li>
          <b>Console Navigation</b> – Provides access to different management
          tools and features.
        </li>
        <li>
          <b>Console Data Management</b> – Displays and allows interaction with
          backend data.
        </li>
      </ul>
      <ImagePreview width="50%" image={consoleAtStartImage} />

      <DocumentTitle level={4}>Console Navigation</DocumentTitle>
      <DocumentText>
        When first launching the Backoffice Starter, the{" "}
        <b>Console Navigation</b> panel will be empty, displaying a message:{" "}
        <i>"Please refresh metadata"</i> (see <b>Image 1, left side</b>).
      </DocumentText>
      <DocumentText>
        Clicking the <b>"Refresh Metadata"</b> button will trigger the software
        to scan all available entities and gather the necessary information for
        data management. After a few seconds, the <b>Console Navigation</b> will
        populate with entities and groups of entities (
        <b>Image 1, right side</b>).
      </DocumentText>

      <DocumentText>
        <b>Usage Guidelines:</b>
      </DocumentText>
      <ul>
        <li>
          The <b>"Refresh Metadata"</b> button should only be used when changes
          are made to entities or their structure.
        </li>
        <li>
          Regular page refreshes should be done using <b>F5</b> or the browser’s
          built-in refresh button.
        </li>
      </ul>

      <DocumentText>
        <b>Interacting with Console Navigation:</b>
      </DocumentText>
      <ul>
        <li>
          <b>Entity Buttons (No Chevron):</b> Clicking an entity button will
          update the <b>Console Data Management</b> section to reflect data from
          the selected entity.
        </li>
        <li>
          <b>Group Buttons (With Chevron):</b> Clicking a group button will
          expand the group and reveal the list of entities under that category.
        </li>
      </ul>
      <MultiImageHorContainer>
        <ImagePreview width="10%" widthOnClick="20%" image={navBeforeRefresh} />
        <ImagePreview width="10%" widthOnClick="20%" image={navAfterRefresh} />
      </MultiImageHorContainer>

      <DocumentTitle level={4}>Console Data Management</DocumentTitle>
      <DocumentText>
        The <b>Console Data Management</b> section is structured into two main
        parts:
      </DocumentText>
      <ul>
        <li>
          <b>Toolbar (Top of the Page)</b>
        </li>
        <li>
          <b>Data Management Panel</b>
        </li>
      </ul>

      <DocumentText>
        <b>Initial State:</b> When first launching the Backoffice Starter, the{" "}
        <b>Data Management</b> panel will be empty, and the <b>Toolbar</b> will
        contain only a <b>"Logout"</b> button.
      </DocumentText>
      <DocumentText>
        Once an entity is selected from the <b>Console Navigation</b>, the{" "}
        <b>Data Management</b> section will populate with tools and data
        relevant to that entity.
      </DocumentText>

      <ImagePreview width="50%" image={emptyDataManagement} />

      <DocumentTitle level={4}>
        Entity Selection & Data Management Panel
      </DocumentTitle>
      <DocumentText>
        Once metadata is collected and all entities appear in the navigation
        menu, users can click on any entity to trigger the{" "}
        <b>Data Management</b> section to reload and fetch the necessary
        information for the selected entity.
      </DocumentText>

      <DocumentText>
        <b>Toolbar Functionality:</b> The <b>Toolbar</b> will adapt based on the
        selected entity's configuration:
      </DocumentText>
      <ul>
        <li>
          It may contain a <b>"Create"</b> button if entity creation is enabled.
        </li>
        <li>Other widgets implemented by the user may also appear here.</li>
      </ul>

      <DocumentText>
        <b>Displaying Records:</b> Once an entity is selected, its records (if
        available) will be displayed in the <b>Data Management</b> panel.
      </DocumentText>

      <DocumentText>
        <b>Lower Toolbar:</b>
      </DocumentText>
      <ul>
        <li>
          The <b>lower toolbar</b> provides options for adjusting how many
          records are displayed per page.
        </li>
        <li>
          Users can select between <b>10, 20, 50, or "All"</b> records per page.
        </li>
        <li>
          The total number of available records is displayed at the bottom of
          the section.
        </li>
      </ul>

      <DocumentText>
        <b>Table Layout:</b> Records are presented in a <b>table</b> within the{" "}
        <b>Data Management</b> section.
      </DocumentText>
      <ul>
        <li>
          The table includes <b>displayable columns</b> configured via{" "}
          <b>Backoffice annotations</b> (more details{" "}
          <Link
            to="backoffice-annotations"
            duration={500}
            smooth={true}
            spy={true}
            containerId="documentContainer"
          >
            here
          </Link>
          ).
        </li>
        <li>
          Two additional columns are always present:
          <ul>
            <li>
              <b>Delete Column</b> (Trash Icon)
            </li>
            <li>
              <b>No Column</b> (Row Number, ordered from 1 to n)
            </li>
          </ul>
        </li>
      </ul>

      <DocumentText>
        <b>Managing Records:</b>
      </DocumentText>
      <ul>
        <li>
          <b>Deleting Records:</b> Click the <b>trash icon</b> in the{" "}
          <b>Delete Column</b> to remove a record. ⚠️{" "}
          <b>This action is irreversible.</b>
        </li>
        <li>
          <b>Updating Records:</b> Click on any row in the table to open the{" "}
          <b>Entity Popup</b>. The <b>Entity Popup</b> displays all details of
          the record, including both <b>editable and non-editable fields</b>.
        </li>
      </ul>

      <ImagePreview width="50%" image={populatedDataManagement} />

      <DocumentTitle level={3}>Entity Creation Popup</DocumentTitle>
      <DocumentText>
        The <b>Entity Creation Popup</b> is used for adding new entities.
      </DocumentText>

      <DocumentTitle level={3}>General Entity Creation</DocumentTitle>
      <DocumentText>
        All entities (except <b>Media</b> and <b>Translation</b>) use the{" "}
        <b>default</b> entity creation popup.
      </DocumentText>
      <ul>
        <li>
          If an entity has <b>creation enabled</b>, it can be added through this
          popup.
        </li>
        <li>
          The popup <b>does not always include all entity fields</b>, as users
          can customize which fields appear in the creation form to meet
          specific requirements.
        </li>
      </ul>

      <ImagePreview
        width="40%"
        widthOnClick="70%"
        image={entityCreationPopup}
      />

      <DocumentTitle level={3}>Media Creation Popup</DocumentTitle>
      <DocumentText>
        The <b>Media Creation Popup</b> is specifically designed for adding
        media files.
      </DocumentText>
      <ul>
        <li>
          It contains <b>two fields</b>:
          <ul>
            <li>
              <b>Description</b> – A user-friendly text to describe the media.
            </li>
            <li>
              <b>Media File Import</b> – A field to upload the media file.
            </li>
          </ul>
        </li>
        <li>
          The <b>media name</b> is automatically generated using the formula:{" "}
          <b>randomUUID-originalFileName</b>.
        </li>
        <li>
          The generated name is primarily for internal reference, as{" "}
          <b>all media operations</b> are handled through <b>media objects</b>{" "}
          rather than filenames.
        </li>
      </ul>

      <ImagePreview width="30%" widthOnClick="50%" image={mediaCreationPopup} />

      <DocumentTitle level={4}>Translation Creation Popup</DocumentTitle>
      <DocumentText>
        The <b>Translation Creation Popup</b> is designed for managing
        translations.
      </DocumentText>
      <ul>
        <li>
          It includes <b>at least two fields</b>:
          <ul>
            <li>
              <b>Translation Code</b>
            </li>
            <li>
              <b>Translation Text</b>
            </li>
          </ul>
        </li>
        <li>
          The number of fields varies <b>based on the number of languages</b>{" "}
          present.
        </li>
        <li>
          Although the <b>Translation Code</b> format is <b>not restricted</b>,
          it is recommended to follow this structure:{" "}
          <b>project.feature.subfeature.distinguishing.term</b>.
        </li>
      </ul>

      <ImagePreview
        width="30%"
        widthOnClick="50%"
        image={translationCreationPopup}
      />

      {/* Technical Documentation Section */}
      <DocumentTitle level={1} id="technical-documentation">
        Technical Documentation
      </DocumentTitle>

      {/* Annotations Overview Section */}
      <DocumentTitle level={2} id="annotations-overview">
        Annotations Overview
      </DocumentTitle>
      <DocumentText>
        The Backoffice Starter includes a set of annotations designed to control
        the behavior, visibility, and properties of entities and their fields
        within the Backoffice interface. These annotations are located in the
        package <code>com.memento.tech.backoffice.annotations</code>.
      </DocumentText>

      {/* @BackofficeTitle Annotation */}
      <DocumentTitle level={4}>1. `@BackofficeTitle` Annotation</DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>, <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeTitle</code> annotation defines titles for entities
        and their fields in the Backoffice UI.
      </DocumentText>
      <ul>
        <li>
          <b>Type Level:</b> When applied to a class, it sets the label for the
          entity in navigation elements (e.g., sidebar buttons, menu items).
        </li>
        <li>
          <b>Field Level:</b> When applied to a field, it sets the label for the
          field in UI elements (e.g., input labels, table headers, data
          management section).
        </li>
      </ul>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{'@BackofficeTitle("Username")'}</DocumentText>
        <DocumentText>{"public class User {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {'@BackofficeTitle("Username Field")'}
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private String username;"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficeOrderPriority Annotation */}
      <DocumentTitle level={4}>
        2. `@BackofficeOrderPriority` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>, <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeOrderPriority</code> annotation determines the
        ordering of entities in navigation and fields in tables and popups.
        Higher values indicate higher priority.
      </DocumentText>
      <DocumentText>
        <b>Default Value:</b> <code>0</code>
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficeOrderPriority(100)"}</DocumentText>
        <DocumentText>{"public class User {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"@BackofficeOrderPriority(50)"}
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private String username;"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficeGroup Annotation */}
      <DocumentTitle level={4}>3. `@BackofficeGroup` Annotation</DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeGroup</code> annotation groups related entities in
        the navigation menu.
      </DocumentText>
      <DocumentText>
        <b>Parameters:</b>
      </DocumentText>
      <ul>
        <li>
          <b>title</b> (Required): The title of the group.
        </li>
        <li>
          <b>order</b> (Optional, Default: <code>0</code>): Defines the order of
          the group within the navigation.
        </li>
      </ul>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {'@BackofficeGroup(title = "ExampleGroup", order = 100)'}
        </DocumentText>
        <DocumentText>{"public class ExampleEntity {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"// Entity fields here"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficePasswordFlag Annotation */}
      <DocumentTitle level={4}>
        4. `@BackofficePasswordFlag` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficePasswordFlag</code> annotation is a marker used to
        designate password fields in entities. This ensures they are rendered as
        password input fields (hidden characters) on the frontend.
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficePasswordFlag"}</DocumentText>
        <DocumentText>{"private String password;"}</DocumentText>
      </CodePreview>

      {/* @BackofficeFieldForShowInList Annotation */}
      <DocumentTitle level={4}>
        5. '@BackofficeFieldForShowInList' Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeFieldForShowInList</code> annotation defines which
        field should be displayed when showing a list of related entities.
      </DocumentText>
      <DocumentText>
        <b>Parameters:</b>
      </DocumentText>
      <ul>
        <li>
          <b>value</b> (Required): The field to be displayed in the list (e.g.,{" "}
          <code>title</code> for a song title).
        </li>
      </ul>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{'@BackofficeFieldForShowInList("title")'}</DocumentText>
        <DocumentText>{"public class Artist {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private List<Song> songs;"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficeDisableCreation Annotation */}
      <DocumentTitle level={4}>
        6. `@BackofficeDisableCreation` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeDisableCreation</code> annotation is a marker
        annotation that prevents the creation of an entity in the Backoffice.
        When this annotation is applied to a class, the "Create" button will not
        appear in the toolbar.
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficeDisableCreation"}</DocumentText>
        <DocumentText>{"public class Artist {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"// Entity fields here"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficeExclude Annotation */}
      <DocumentTitle level={4}>
        7. `@BackofficeExclude` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>TYPE</code>, <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeExclude</code> annotation is a marker annotation
        used to exclude entities or fields from the Backoffice UI. It can be
        applied at the class level (to hide the entire entity) or field level
        (to hide individual fields in tables or popups).
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficeExclude"}</DocumentText>
        <DocumentText>{"private String username;"}</DocumentText>
        <DocumentText>{"@BackofficeExclude"}</DocumentText>
        <DocumentText>{"public class Artist {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"// Entity fields here"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      {/* @BackofficeCreationFieldExclude Annotation */}
      <DocumentTitle level={4}>
        8. `@BackofficeCreationFieldExclude` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeCreationFieldExclude</code> annotation is similar
        to <code>@BackofficeExclude</code>, but it only excludes fields from the
        entity creation popup.
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficeCreationFieldExclude"}</DocumentText>
        <DocumentText>{"private String username;"}</DocumentText>
      </CodePreview>

      {/* @BackofficeForbidUpdate Annotation */}
      <DocumentTitle level={4}>
        9. `@BackofficeForbidUpdate` Annotation
      </DocumentTitle>
      <DocumentText>
        <b>Target:</b> <code>FIELD</code>
        <br />
        <b>Retention Policy:</b> <code>RUNTIME</code>
      </DocumentText>
      <DocumentText>
        The <code>@BackofficeForbidUpdate</code> annotation is a marker
        annotation that prevents fields from being updated via the Backoffice
        UI. It is useful for fields that can be updated via other parts of the
        system but should be protected in the Backoffice.
      </DocumentText>
      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@BackofficeForbidUpdate"}</DocumentText>
        <DocumentText>{"private String username;"}</DocumentText>
      </CodePreview>

      {/* Summary of Annotations */}
      <DocumentTitle level={4}>Summary of Annotations</DocumentTitle>
      <DocumentText>
        Below is a summary of all the annotations and their purposes:
      </DocumentText>
      <table>
        <thead>
          <tr>
            <th>Annotation</th>
            <th>Target(s)</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>@BackofficeTitle</code>
            </td>
            <td>
              <code>TYPE</code>, <code>FIELD</code>
            </td>
            <td>Sets title for entities (in navigation) and fields (in UI)</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeOrderPriority</code>
            </td>
            <td>
              <code>TYPE</code>, <code>FIELD</code>
            </td>
            <td>Defines the order/priority of entities and fields</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeGroup</code>
            </td>
            <td>
              <code>TYPE</code>
            </td>
            <td>Groups entities together in navigation</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficePasswordFlag</code>
            </td>
            <td>
              <code>FIELD</code>
            </td>
            <td>Marks password fields for password input behavior</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeFieldForShowInList</code>
            </td>
            <td>
              <code>TYPE</code>
            </td>
            <td>Defines field to show in list for related entities</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeDisableCreation</code>
            </td>
            <td>
              <code>TYPE</code>
            </td>
            <td>Disables creation of the entity in the Backoffice UI</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeExclude</code>
            </td>
            <td>
              <code>TYPE</code>, <code>FIELD</code>
            </td>
            <td>Excludes entities or fields from the Backoffice interface</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeCreationFieldExclude</code>
            </td>
            <td>
              <code>FIELD</code>
            </td>
            <td>Excludes fields from the entity creation popup</td>
          </tr>
          <tr>
            <td>
              <code>@BackofficeForbidUpdate</code>
            </td>
            <td>
              <code>FIELD</code>
            </td>
            <td>Prevents field from being updated in the Backoffice UI</td>
          </tr>
        </tbody>
      </table>

      {/* Authentication Subsection */}
      <DocumentTitle level={2} id="authentication">
        Authentication
      </DocumentTitle>
      <DocumentText>
        The authentication system is based on HTTP-only cookies. A JWT token is
        placed inside an HTTP-only cookie and sent as a response. Each request
        to the backend is validated against the JWT token, and the system checks
        for an <code>ADMIN</code> role.
      </DocumentText>

      <DocumentText>
        <b>Configuration Properties:</b>
      </DocumentText>
      <ul>
        <li>
          <b>memento.tech.backoffice.auth.token.secret</b>
          <ul>
            <li>Configurable JWT token secret.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.auth.cookie.expiry</b>
          <ul>
            <li>Configurable cookie expiry time in milliseconds.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.auth.cookie.name</b>
          <ul>
            <li>Configurable cookie name.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.development.mode</b>
          <ul>
            <li>
              Enables test user credentials in development mode. A test user is
              created with username: <code>"test"</code> and password:{" "}
              <code>"password"</code>. It is recommended to disable this in
              production.
            </li>
          </ul>
        </li>
      </ul>

      <DocumentTitle level={4}>
        <b>Security Measures:</b>
      </DocumentTitle>
      <ul>
        <li>
          <b>BCryptPasswordEncoder</b> is used for password encryption.
        </li>
        <li>
          The session creation policy is <b>STATELESS</b>.
        </li>
        <li>
          Unauthorized users attempting to access the Backoffice are redirected
          to <code>/backoffice/login</code>.
        </li>
      </ul>

      {/* Translations Management Tool Subsection */}
      <DocumentTitle level={2} id="translations-management-tool">
        Translations Management Tool
      </DocumentTitle>
      <DocumentText>
        The Translation Management Tool provides a mechanism for handling
        multi-language support. If a translation is unavailable for a given
        translation code, the system returns the translation code itself,
        helping developers identify missing translations.
      </DocumentText>

      <DocumentText>
        <b>Configuration Properties:</b>
      </DocumentText>
      <ul>
        <li>
          <b>memento.tech.backoffice.translation.defaultLocale</b>
          <ul>
            <li>Default locale for translations.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.translation.supportedLocales</b>
          <ul>
            <li>List of supported locales.</li>
          </ul>
        </li>
      </ul>

      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <DocumentText>
        Developers should use the <code>Translation</code> class inside entity
        definitions like this:
      </DocumentText>
      <CodePreview>
        <DocumentText>{"private Translation description;"}</DocumentText>
      </CodePreview>
      <DocumentText>
        It is recommended to add{" "}
        <code>cascade = CascadeType.ALL, orphanRemoval = true</code> to entity
        associations for proper translation management.
      </DocumentText>

      <DocumentText>
        <b>Behavior:</b>
      </DocumentText>
      <ul>
        <li>Developers query a translation using a translation code.</li>
        <li>
          The tool returns a <b>pure string</b> for display on the frontend.
        </li>
        <li>
          If no translation is found, the <b>translation code is returned</b>,
          allowing developers to track missing translations.
        </li>
      </ul>

      {/* Media Management Tool Subsection */}
      <DocumentTitle level={2} id="media-management-tool">
        Media Management Tool
      </DocumentTitle>
      <DocumentText>
        The Media Management Tool provides default media storage functionality,
        storing media files in a specified directory. Developers can implement
        custom storage solutions by implementing the{" "}
        <code>FileStorageService</code> interface.
      </DocumentText>

      <DocumentText>
        <b>Configuration Properties:</b>
      </DocumentText>
      <ul>
        <li>
          <b>memento.tech.backoffice.media.storagePath</b>
          <ul>
            <li>Directory where media files are stored.</li>
          </ul>
        </li>
        <li>
          <b>memento.tech.backoffice.media.maxSize</b>
          <ul>
            <li>Maximum allowed file size for uploads.</li>
          </ul>
        </li>
      </ul>

      <DocumentText>
        <b>Custom Implementation:</b>
      </DocumentText>
      <DocumentText>
        Developers can override the default storage by implementing the
        following interface:
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {"package com.memento.tech.backoffice.service;"}
        </DocumentText>
        <br />
        <DocumentText>
          {"import org.springframework.web.multipart.MultipartFile;"}
        </DocumentText>
        <DocumentText>{"import java.io.IOException;"}</DocumentText>
        <br />
        <DocumentText>{"public interface FileStorageService {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"byte[] getFile(final String fileName) throws IOException;"}
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {
            "String saveFile(final MultipartFile multipartFile) throws IOException;"
          }
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"void removeFile(final String fileName) throws IOException;"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>
      <DocumentText>
        Once implemented, the media management system will function seamlessly
        with the custom storage mechanism.
      </DocumentText>

      {/* Functional Widgets Subsection */}
      <DocumentTitle level={2} id="functional-widgets">
        Functional Widgets
      </DocumentTitle>
      <DocumentText>
        Functional Widgets provide interactive buttons in the UI to perform
        specific functions. They can be configured at:
      </DocumentText>
      <ul>
        <li>
          <b>Entity Level:</b> Button appears in the toolbar and applies to all
          records of an entity.
        </li>
        <li>
          <b>Record Level:</b> Button appears inside the entity popup and
          applies to a single record.
        </li>
      </ul>

      <DocumentText>
        <b>Usage:</b>
      </DocumentText>
      <DocumentText>
        To use a widget, developers should annotate methods with:
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {
            '@RecordFunctionButton(widgetId = "companyApproveWidget", buttonLabel = "Approve", functionBeanClass = PartnerApproveFunctionButtonHandler.class)'
          }
        </DocumentText>
      </CodePreview>
      <DocumentText>
        Additionally, a record should be added to the database, for example
        through an <code>import.sql</code> file.
      </DocumentText>

      <DocumentText>
        <b>Implementation:</b>
      </DocumentText>
      <DocumentText>
        Developers need to implement the{" "}
        <code>RecordFunctionButtonHandler</code> interface:
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {"package com.memento.tech.backoffice.widget;"}
        </DocumentText>
        <br />
        <DocumentText>
          {
            "public interface RecordFunctionButtonHandler<T> extends WidgetHandler<T> {"
          }
        </DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"void handle(T entity);"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>
      <DocumentText>
        The <code>WidgetHandler</code> interface determines whether the widget
        should be displayed:
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {"package com.memento.tech.backoffice.widget;"}
        </DocumentText>
        <br />
        <DocumentText>{"public interface WidgetHandler<T> {"}</DocumentText>
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"boolean show(T entity);"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      <DocumentText>
        <b>Widget Database Structure:</b>
      </DocumentText>
      <DocumentText>
        Widgets are stored in the database with the following structure:
      </DocumentText>
      <CodePreview>
        <DocumentText>{"@Entity"}</DocumentText>
        <DocumentText>
          {'@Table(indexes = {@Index(columnList = "id", unique = true)})'}
        </DocumentText>
        <DocumentText>
          {
            "public class Widget extends BaseEntity implements BackofficeConfigurationMarker {"
          }
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"@Column(nullable = false, unique = true)"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private String widgetId;"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private boolean entityLevel;"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private boolean recordLevel;"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private String label;"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"@Column(nullable = false, unique = true)"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private Class<? extends WidgetHandler> widgetHandlerClass;"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"@Column(nullable = false, unique = true)"}
        </DocumentText>
        <br />
        <DocumentText style={{ paddingLeft: "20px" }}>
          {"private String handlerMapping;"}
        </DocumentText>
        <DocumentText>{"}"}</DocumentText>
      </CodePreview>

      <DocumentText>
        <b>Handler Mapping:</b>
      </DocumentText>
      <DocumentText>
        A static handler mapping is used to trigger widget actions:
      </DocumentText>
      <CodePreview>
        <DocumentText>
          {'String WIDGET_API_PREFIX = "/api/backoffice/widget";'}
        </DocumentText>
        <DocumentText>
          {'String RECORD_FUNCTION_API_SUFFIX = "/function/record";'}
        </DocumentText>
        <DocumentText>
          {'String ENTITY_FUNCTION_API_SUFFIX = "/function/entity";'}
        </DocumentText>
      </CodePreview>
      <DocumentText>
        <i>
          Note: Entity-Level Widgets are planned but not yet implemented. They
          will allow actions to be performed on multiple records at once.
        </i>
      </DocumentText>

      {/* UI Widgets Subsection */}
      <DocumentTitle level={2} id="ui-widgets">
        UI Widgets
      </DocumentTitle>
      <DocumentText>UI Widgets are not yet implemented.</DocumentText>

      {/* Cron Job Management Tool Subsection */}
      <DocumentTitle level={2} id="cron-job-management-tool">
        Cron Job Management Tool
      </DocumentTitle>
      <DocumentText>Cron Job Management is not yet implemented.</DocumentText>

      {/* Live Console Subsection */}
      <DocumentTitle level={2} id="live-console">
        Live Console
      </DocumentTitle>
      <DocumentText>Live Console is not yet implemented.</DocumentText>

      {/* Contribution Guide Section */}
      <DocumentTitle level={1} id="contribution-guide">
        Contribution Guide
      </DocumentTitle>
      <DocumentText>
        We welcome contributions to the Backoffice Spring Boot Starter project!
        Below are some guidelines to help you get started.
      </DocumentText>

      <DocumentTitle level={2}>How to Contribute</DocumentTitle>
      <DocumentText>
        To contribute to the project, follow these steps:
      </DocumentText>
      <ol>
        <li>
          <b>Fork the Repository:</b> Start by forking the{" "}
          <ForeignLink
            target="_blank"
            rel="noreferrer"
            href="https://github.com/memento-tech/memento-backoffice-spring-boot-starter"
          >
            repository
          </ForeignLink>{" "}
          on GitHub.
        </li>
        <li>
          <b>Clone the Repository:</b> Clone your forked repository to your
          local machine using the following command:
          <CodePreview>
            <DocumentText>
              {
                "git clone https://github.com/YOUR-USERNAME/memento-backoffice-spring-boot-starter.git"
              }
            </DocumentText>
          </CodePreview>
        </li>
        <li>
          <b>Create a New Branch:</b> Create a new branch for your feature or
          bug fix:
          <CodePreview>
            <DocumentText>
              {"git checkout -b feature/your-feature-name"}
            </DocumentText>
          </CodePreview>
        </li>
        <li>
          <b>Make Changes:</b> Implement your changes and ensure that the code
          follows the project's coding standards.
        </li>
        <li>
          <b>Commit Your Changes:</b> Commit your changes with a descriptive
          commit message:
          <CodePreview>
            <DocumentText>
              {"git commit -m 'Add your feature or fix'"}
            </DocumentText>
          </CodePreview>
        </li>
        <li>
          <b>Push Your Changes:</b> Push your changes to your forked repository:
          <CodePreview>
            <DocumentText>
              {"git push origin feature/your-feature-name"}
            </DocumentText>
          </CodePreview>
        </li>
        <li>
          <b>Create a Pull Request:</b> Open a pull request from your branch to
          the main repository. Provide a clear description of your changes and
          reference any related issues.
        </li>
      </ol>

      <DocumentTitle level={2}>Coding Standards</DocumentTitle>
      <DocumentText>
        Please adhere to the following coding standards when contributing:
      </DocumentText>
      <ul>
        <li>
          Use consistent indentation (4 spaces for Java, 2 spaces for
          JavaScript).
        </li>
        <li>
          Follow the naming conventions for variables, methods, and classes.
        </li>
        <li>Write clear and concise comments where necessary.</li>
        <li>Ensure all new code is covered by unit tests.</li>
      </ul>

      <DocumentTitle level={2}>
        Reporting Bugs or Suggesting Features
      </DocumentTitle>
      <DocumentText>
        If you encounter a bug or have a feature suggestion, please open an
        issue on the{" "}
        <ForeignLink
          target="_blank"
          rel="noreferrer"
          href="https://github.com/memento-tech/memento-backoffice-spring-boot-starter/issues"
        >
          GitHub Issues page
        </ForeignLink>
        . Provide as much detail as possible, including steps to reproduce the
        bug or a clear description of the proposed feature.
      </DocumentText>

      {/* License Section */}
      <DocumentTitle level={1} id="license">
        License
      </DocumentTitle>
      <DocumentText>
        The Backoffice Spring Boot Starter is licensed under the Apache License,
        Version 2.0. Below is the full license text:
      </DocumentText>
      <CodePreview>
        <DocumentText>{"Copyright 2024 Igor Stojanovic"}</DocumentText>
        <DocumentText>
          {'Licensed under the Apache License, Version 2.0 (the "License");'}
        </DocumentText>
        <DocumentText>
          {"you may not use this file except in compliance with the License."}
        </DocumentText>
        <DocumentText>{"You may obtain a copy of the License at"}</DocumentText>
        <DocumentText>
          {"    http://www.apache.org/licenses/LICENSE-2.0"}
        </DocumentText>
        <DocumentText>
          {
            "Unless required by applicable law or agreed to in writing, software"
          }
        </DocumentText>
        <DocumentText>
          {'distributed under the License is distributed on an "AS IS" BASIS,'}
        </DocumentText>
        <DocumentText>
          {
            "WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied."
          }
        </DocumentText>
        <DocumentText>
          {
            "See the License for the specific language governing permissions and"
          }
        </DocumentText>
        <DocumentText>{"limitations under the License."}</DocumentText>
      </CodePreview>
    </Container>
  );
};

export default BackofficeStarterDocumentation;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    overflow: hidden;
  }

  ul {
    @media screen and (max-width: 600px) {
      padding: 1rem;
    }
  }

  li {
    padding-top: 10px;
    b {
      font-size: 1.1rem;
    }
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

const MultiImageHorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
