export {};

/*
// const element = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello",
//   },
// }

const container = document.getElementById("root")!

// const node = document.createElement(element.type);
// node["title"] = element.props.title;

// const text = document.createTextNode("");
// text["nodeValue"] = element.props.children;

// node.appendChild(text);
// container.appendChild(node);

// function createElement<T>(type: T, props?: T, ...children: T[]) {

//   return {
//     type,
//     props: {
//       ...props,
//       children,
//     },
//   }
// }

// createElement("div");

// function createElement<T>(type: T, props?: T, ...children: T[]) {
//     console.log(type, props, children);
//     return {
//         type,
//         props: {
//             ...props,
//             children,
//         },
//     };
// }

// createElement("div", null, "a", "b", "c");

function createElement<T>(type: T, props?: T, ...children: T[]) {
    console.log(type, props, children);
    return {
        type,
        props: {
            ...props,
            children: children.map(child => typeof child === "object" ? child : createTextElement(child))
        },
    };
}

function createTextElement<T>(text: T) {
    return {
        type: "text_element",
        props: {
            nodevalue: text,
            children: [],
        },
    };
}

function render(element: any, container: any) {
    const dom = element.type == "text_element" ? document.createTextNode("") : document.createElement(element.type);

    const isProperty = (key: any) => key !== "children";
    Object.keys(element.props).filter(isProperty).forEach(name => {
        dom[name] = element.props[name];
    });
}

const Pramux = {
    createElement,
    createTextElement,

}

// const element = Pramux.createElement(
//     Pramux.createElement("div", null, "bar"),
//     Pramux.createElement("b")
// );

// const element = (
//     <div id="foo">
//         <a href="/">bar</a>
//         <br />
//     </div>
// )
*/

interface VirtualDOMElement {
  type: string;
  props: {
    [key: string]: any;
    children: (VirtualDOMElement | string)[];
  };
}

function createElement(
  type: string,
  props: { [key: string]: any },
  ...children: (VirtualDOMElement | string)[]
): VirtualDOMElement {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text: string): VirtualDOMElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element: VirtualDOMElement, container: HTMLElement): void {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  const isProperty = (key: string) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      (dom as any)[name] = element.props[name];
    });
  element.props.children.forEach(child => render(child as VirtualDOMElement, dom as HTMLElement));
  container.appendChild(dom);
}

const Didact = {
  createElement,
  render
};

// /** @jsx Didact.createElement */
// const element = (
//   <div style="background: salmon">
//     <h1>Hello World</h1>
//     <h2 style="text-align:right">from Didact</h2>
//   </div>
// );

// const container = document.getElementById("root");
// if (container) {
//   Didact.render(element, container);
// }
