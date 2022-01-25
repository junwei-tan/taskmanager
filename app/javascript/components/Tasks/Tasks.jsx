import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import Task from "./Task";

const GlobalStyle = createGlobalStyle`
  body {
    background: #c7efff;
  }`;

const Wrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  font-weight: bold;

  h1 {
    font-size: 42px;
  }
`;
const DropDown = styled.div`
  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

const Grid = styled.div`
  display: grid;
  background: white;
  radius: 5px;
  grid-gap: 20px;
  width: fit;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;
`;

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/tasks.json")
      .then((resp) => setTasks(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [tasks.length]);

  const grid = tasks.map((item) => {
    return <Task key={item.attributes.name} {...item} />;
  });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <h1>Task Manager</h1>
        </Header>
        <Grid>{grid}</Grid>
      </Wrapper>
    </>
  );
};

export default Tasks;
