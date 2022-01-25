import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  display: table;
  clear: both;
`;

const CheckBox = styled.div`
  float: left;
  width: 20%;
  margin-left: 0px;
  margin-right: 0px;
`;

const ListItem = styled.div`
  float: left;
  width: 40%;
  .input {
    width: 100%;
  }
`;
const Tag = styled.div`
  float: left;
  width: 20%;
  margin-left: 0px;
  margin-right: 0px;
`;
const SubmitBtn = styled.div`
  width: 10%;
  float: left;
  margin-left: 0px;
  margin-right: 0px;
`;

const Task = (props) => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState(props.attributes.name);
  const [tag, setTag] = useState(props.attributes.tag);

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleTag = (e) => {
    e.preventDefault();
    setTag(e.target.value);
  };

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const task_id = props.id;
    const task_details = { name: name, status: status, tag: tag };
    console.log(task_id);
    console.log({ task_details });
    axios.patch(`/api/v1/tasks/${task_id}`, task_details);
  };

  return (
    <Card>
      <form>
        <CheckBox>
          <label>Completed?</label>
          <input
            type="checkbox"
            id="completedbox"
            checked={status}
            onChange={handleStatus}
          />
        </CheckBox>
        <ListItem>
          <input type="text" value={name} onChange={handleName} />
        </ListItem>
        <Tag>
          <input type="text" value={tag} onChange={handleTag} />
        </Tag>
        <SubmitBtn>
          <input type="submit" value="save changes" onClick={handleSubmit} />
        </SubmitBtn>
      </form>
    </Card>
  );
};

export default Task;
