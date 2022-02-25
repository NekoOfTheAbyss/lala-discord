import {
  Client as ErisClient,
  Collection as ErisCollection,
  User as ErisUser,
} from "eris";
import Dispatcher from "./Dispatcher.js";
import Registry from "./Registry.js";

import AddCommas from "../util/AddCommas.js";
import Embed from "../util/Embed.js";
import Color from "../util/Color.js";

class Client extends ErisClient {
  constructor(token, options) {
    super(token, options);
    this.rawOptions = options;
    this.owner = options.owner;
    this.users = new ErisCollection(ErisUser, 1);
    this.dispatcher = new Dispatcher(this);
    this.registry = new Registry(this);
    this.util = { AddCommas, Embed, Color };
  }
}

export default Client;
