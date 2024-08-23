const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{id:"heading1"},"I am from heading1"),
        React.createElement("h2",{id:"heading2"},"I am from heading2")
       ]
    ),React.createElement("div",{id:"child2"},
        [ React.createElement("h1",{id:"heading1"},"I am from heading1"),
            React.createElement("h2",{id:"heading2"},"I am from heading2")
           ]
    )])

const rroot = ReactDOM.createRoot(document.getElementById("root"))
rroot.render(parent)