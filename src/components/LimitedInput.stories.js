
import LimitedInput from "./LimitedInput";
import { withKnobs, number} from "@storybook/addon-knobs"; 
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";


export default {
    title: "Forms/LimitedInput",
    decorators: [
        () => "<div class='m-4 border-2 border-red-200'><story/></div>", withKnobs],
        parameters: {
          notes: `
      # blablablablablablabslbl
      blablablablsblsblsbslbsl
      
        `,
        },
};

export const SimpleStory = () => ({
    render() {
      return <LimitedInput />;
    },
  });

  export const Actions = () => ({
    render() {
      return <LimitedInput onInput={action("input")} />;
    },
  });
  
  export const Links = () => ({
    render() {
      return (
        <button onClick={linkTo("Forms/LimitedInput", "Actions")}>
          Link
        </button>
      );
    },
  });

  export const VariableLimit = () => ({
    props: {
      limit: { default: number("Limit", 12) },
    },
    render() {
      return <LimitedInput value="Testtest" limit={this.limit}/>;
    },
  });

  SimpleStory.story = { 
      name: "Simple Story",
       decorators: [
          () => "<div class='m-2 border-2 border-green-200'><story/></div>"], 
          parameters: {
            notes: `
            blablabla `,
          },
      
      
     };

  export const simpleWithTemplate = () => ({
    components: { LimitedInput },
    template: "<LimitedInput />",
  });

  export const withAValue = () => ({
    render() {
      return <LimitedInput value="test" />;
    },
  });
  
  export const ValueTooLong = () => ({
    render() {
      return <LimitedInput value="KübiKübiKübi**" />;
    },
  });
/* export const vueComponent = () => ({
    template: "<h2>Vue Component</h2>"
});

export const pureTemplate = () => "<h2>Pure Template</h2>";

export const renderFunctionJSX = () => ({
    render() {
        return <h2>In JSX</h2>
    },
}); */