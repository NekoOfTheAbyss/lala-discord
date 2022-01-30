class Command {
  constructor(client, data) {
    this.validateInfo(data);
    this.client = client;
    this.name = data.name;
    this.description = data.description || "";
    this.group = data.group;
    this.textOnly = new Boolean(data.textOnly);
    this.options = data.options;
  }
  validateInfo(data) {
    if (!data.name || data.name.length > 32)
      throw new Error(`Name for ${data.name} is invalid.`);
    if (data.description && data.description > 100)
      throw new Error(`Description for ${data.name} is invalid.`);
    if (!data.group || data.group.length > 32)
      throw new Error(`Group ${data.group} for ${data.name} is invalid.`);
  }
  json() {
    return {
      name: this.name,
      description: this.description,
      type: 1,
      options: Array.isArray(this.options)
        ? this.options.map((x) => ({
            name: x.name,
            description: x.description,
            type: x.type,
            required: x.required || false,
          }))
        : [],
    };
  }
  async run(message) {
    return null;
  }
}
module.exports = Command;
