import Nav from ".";

export default {
  title: "Nav",
}

const args = {
  navItems: [
    {
      text: "Link One",
      link: "/link-one"
    },
    {
      text: "Link Two",
      link: "/link-two"
    },
    {
      text: "Link Three",
      link: "/link-three"
    }
  ]
}

const params = {
}

export const Default = (args: any) => <Nav {...args} />;
Default.parameters = params
Default.args = args;
