import { Datapack } from "../index";

const datapack = new Datapack("Test datapack.");
datapack.setFunction("domain:tests/1", ["say test"]);
datapack.setFunctionIfAbsent("domain:tests/1", () => ["say this should not happen"]);
datapack.setFunctionIfAbsent("domain:tests/2", () => ["say this should exist"]);
datapack.writeTo("test");
