const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google'
}

function customRender(reactElement,mainContainer){
    
    
    /* const domElm = document.createElement(reactElement.type);
    domElm.innerHTML = reactElement.children
    domElm.setAttribute('href',reactElement.props.href)
    domElm.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElm) */

    //Optimized code
    const domElm = document.createElement(reactElement.type)
    domElm.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElm.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElm)
}

const root = document.getElementById('root')

customRender(reactElement,root)
