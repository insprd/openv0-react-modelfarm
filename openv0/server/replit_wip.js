const replitai = require('@replit/ai-modelfarm');

async function main() {
  const stream = await replitai.chat({
    model: 'chat-bison',
    temperature: 0.7,
    messages: [
      {
        author: 'system',
        content: `Your task is to design a new React component for a web app, according to the user's request, in JSON design task format.\n` +
          `If you judge it is relevant to do so, you can specify pre-made library components to use in the task.\n` +
          `You can also specify the use of icons if you see that the user's request requires it.\n---\n` +
          `Available UI Library Components:\n` +
          `- Avatar : an avatar image\n` +
          `- Button : a button component\n` +
          `\n---\n` +
          `- JSON design task format : \n` +
          JSON.stringify(
            {
              new_component_name: 'ExampleComponentName',
              new_component_description: 'elaborate on the provided task. a very detailed description of the component design task, including all UI elements required by the task and additional elaboration',
              new_component_icons_elements: {
                does_new_component_need_icons_elements: 'boolean',
                if_so_what_new_component_icons_elements_are_needed: ['example of needed icon 1', 'example of needed icon 2']
              },
              use_library_components: [
                {
                  library_component_name: 'ALibraryProvidedComponentName',
                  library_component_usage_reason: 'The use case for the provided library component in this design task',
                }
              ],
            }
            , null, ` `) +
          `\n- user task : a music album player component\n\n` +
          'Your answer should start and end with curly brackets, and be a parseable object',
      },
    ],
  });

  // console.dir(stream)
  /*
  let completion = ''
  for await (const part of stream.value) {
    console.log(part.message.content)
    completion += part.message.content
  }
  console.log('---')
  console.log(completion)
  console.dir(JSON.parse(completion))
  */
  console.dir(JSON.parse(stream.value.message.content));
}

main()