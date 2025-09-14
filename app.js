/* <div id="parent">
    <div id="child1">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
</div> */



// Create and elemnt in react

const heading = React.createElement("h1", { id: "abc" }, "Hello World From React!");//here {inside this we can write our attribute which we 
//want to give to our element}
console.log(heading);//it is an object it's not an element


//if we want to achive nested element like this
//<div id="root"><div id="parent"><div id="child1"><h1>I am h1 tag</h1><h2>I am h2 tag</h2></div><div id="child2"><h1>I am h1 tag</h1><h2>I am h2 tag</h2></div></div></div>
const divtag = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])]);


//create root to render the element
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(divtag);