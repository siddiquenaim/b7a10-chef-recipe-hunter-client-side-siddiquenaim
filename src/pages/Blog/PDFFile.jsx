import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 18,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Answers to your questions
        </Text>
        <Text style={styles.text}>
          Question-1: Tell us the differences between uncontrolled and
          controlled components.
        </Text>
        <Text style={styles.text}>
          Answer: In React, uncontrolled components are those where the form
          data is handled by the DOM itself. The component doesn't have direct
          control over the form data. On the other hand, controlled components
          are managed by React state. The component has full control over the
          form data and handles the state updates. Controlled components provide
          more control and flexibility, allowing for validation and custom
          logic, while uncontrolled components are simpler to implement but lack
          fine-grained control.
        </Text>
        <Text style={styles.text}>
          Question-2: How to validate React props using PropTypes?
        </Text>
        <Text style={styles.text}>
          Answer: PropTypes is a built-in library in React that helps to
          validate the props passed to a component. By defining the expected
          prop types, you can enforce the correct data type and even specify if
          a prop is required or optional. To validate props using PropTypes, you
          import the library, define the prop types for each prop in your
          component, and React will issue a warning in the console if the props
          don't match the defined types or requirements.
        </Text>
        <Text style={styles.text}>
          Question-3: Tell us the difference between Node.js and Express.js.
        </Text>
        <Text style={styles.text}>
          Answer: Node.js is a runtime environment that allows you to execute
          JavaScript code on the server-side. It provides a platform for
          building server-side applications using JavaScript. Express.js, on the
          other hand, is a web application framework built on top of Node.js. It
          simplifies the process of building web applications by providing a set
          of features and utilities, such as routing, middleware, and template
          engines. Express.js is designed to work seamlessly with Node.js and
          helps in creating robust and scalable web applications.
        </Text>
        <Text style={styles.text}>
          Question-4: What is a custom hook, and why will you create a custom
          hook?
        </Text>
        <Text style={styles.text}>
          Answer: In React, a custom hook is a JavaScript function that starts
          with the 'use' prefix and allows you to reuse stateful logic across
          different components. Custom hooks enable you to extract and share
          common logic, making it easier to manage complex stateful operations
          in a reusable manner. You would create a custom hook when you find
          yourself duplicating code or dealing with complex state management in
          multiple components. By creating a custom hook, you can centralize the
          logic, promote code reuse, and improve the overall organization and
          maintainability of your React components.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
