import Client from './Model';
import { get } from 'lodash';
import { generateId } from "../utils/generateId";

export const  clientCreate = (req, res) => {
  const clientId = generateId();
  const name = get(req, 'body.name', '');
  const lastName = get(req, 'body.lastName', '');
  const newUser = new Client({
    clientId,
    name,
    lastName,
  });

  newUser
    .save() //promise
    .then(() => {
      res.status(200).json('client created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('client NOT created');
    });
};