import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from '../../../components';
import * as utils from '../../../utils';
import * as icons from '../../../images';
import { __headers } from './utils';
import { fetchData, UploadData, useAuthDispatch } from '../../../context';

export const Customize = (props) => {
  const dispatch = useAuthDispatch();
  const [view, setView] = useState(0);
  const handleNav = (val) => {
    utils.clearSuccessMessage(dispatch);
    utils.clearContextErrors(dispatch);
    setView(val);
  };
  return (
    <Styled.Base>
      <div>
        <Styled.Components>
          <Styled.SetUpBtns onClick={(e) => handleNav(0)}>
            Home
          </Styled.SetUpBtns>
          <div>
            <Styled.SetUpBtns onClick={(e) => handleNav(1)}>
              New Project
            </Styled.SetUpBtns>
            <Styled.SetUpBtns onClick={(e) => handleNav(2)}>
              Update Project
            </Styled.SetUpBtns>
            <Styled.SetUpBtns onClick={(e) => handleNav(3)}>
              Reset Password
            </Styled.SetUpBtns>
          </div>
        </Styled.Components>
      </div>
      <ViewPort view={view} />
    </Styled.Base>
  );
};
const ViewPort = (props) => {
  switch (props.view) {
    case 0:
      return <Updater hd={__headers.avator} bd={HomePage} />;
    case 1:
      return <Updater hd={__headers.new} bd={CreateNew} />;
    case 2:
      return <Updater hd={__headers.update} bd={ProjectUpdate} />;
    case 3:
      return <Updater hd={__headers.passcode} bd={PassReset} />;
    default:
      return;
  }
};
const Updater = (props) => {
  return (
    <Styled.Updater>
      <Styled.HeadDesc>{props.hd}</Styled.HeadDesc>
      <props.bd />
    </Styled.Updater>
  );
};
const PassReset = () => {
  return (
    <Styled.CustomForm>
      <Styled.FieldDesc>{__headers.passText}</Styled.FieldDesc>
      <Styled.SmediaFields>
        <Styled.SMIconF>
          <icons.key fill={'#1280a5'} size={22} />
        </Styled.SMIconF>
        <Styled.SMInputs type='password' placeholder='old Password' />
      </Styled.SmediaFields>
      <Styled.CustomLogin type='button'>Submit</Styled.CustomLogin>
      <utils.ViewErrorMessage />
    </Styled.CustomForm>
  );
};

const CreateNew = () => {
  const dispatch = useAuthDispatch();
  const [project, setName] = useState('');
  async function handleSubmit(e) {
    const path = utils.remotes.new;
    const payload = { project, version: '1.0' };
    const res = await UploadData(dispatch, payload, path);
    if (res) {
      utils.clearContextErrors(dispatch);
      utils.successResponse(res.message, dispatch);
    }
  }
  return (
    <Styled.CustomForm>
      <Styled.SmediaFields>
        <Styled.SMIconF>
          <icons.IG fill={'#1280a5'} size={22} />
        </Styled.SMIconF>
        <Styled.SMInputs
          type='text'
          placeholder='Project Name'
          onChange={(e) => setName(e.target.value)}
        />
      </Styled.SmediaFields>
      <Styled.CustomLogin
        type='button'
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </Styled.CustomLogin>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};

const HomePage = () => {
  return <div>Home Page</div>;
};

const ProjectUpdate = () => {
  async function handleSubmit() {
    const path = utils.remotes.update;
    const formData = new FormData();
    formData.append('update', payload.update[0]);
    formData.append('version', payload.version);
    formData.append('project', payload.project);
    const data = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: JSON.parse(localStorage.getItem('_u')).u,
      },
      body: formData,
    };
    axios
      .post(`http://localhost:3700${path}`, data.body, {
        headers: data.headers,
      })
      .then((res) => {
        utils.clearContextErrors(dispatch);
        utils.successResponse(res.data.message, dispatch);
      })
      .catch((err) => {
        const error = err.response.data.message;
        dispatch({ type: 'APIACCESS_ERROR', error: error });
      });
  }
  const dispatch = useAuthDispatch();
  const [payload, setPayload] = useState({
    project: '',
    version: '',
    update: [],
  });
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getProjects() {
      const data = await fetchData(dispatch, utils.remotes.all);
      if (data) setProjects(data.projects);
    }
    getProjects();
  }, [dispatch]);
  return (
    <Styled.CustomForm>
      <Styled.Card>
        <Styled.Select
          name='item'
          onChange={(e) => setPayload({ ...payload, project: e.target.value })}
        >
          <option value=''>Select Item</option>
          {projects.map((project) => (
            <option key={project._id} value={project._id}>
              {` ${project.project}  ${project.version}`}
            </option>
          ))}
        </Styled.Select>
      </Styled.Card>
      <Styled.Card>
        <Styled.Input
          type='text'
          placeholder='Version'
          onChange={(e) => setPayload({ ...payload, version: e.target.value })}
        />
      </Styled.Card>
      <Styled.Card>
        <input
          type='file'
          accept='.zip'
          onChange={(e) => utils.monitorAFileInput(e, setPayload, payload)}
        />
      </Styled.Card>
      <Styled.Card>
        <Styled.CustomLogin type='button' onClick={(e) => handleSubmit(e)}>
          Submit
        </Styled.CustomLogin>
      </Styled.Card>
      <utils.ViewErrorMessage />
      <utils.ShowSuccess />
    </Styled.CustomForm>
  );
};
