var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Mouse = Matter.Mouse,
    common = Matter.common,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

var engine = Engine.create(),
world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1600,
        height: 600,
        wireframes: false,
        background: 'black'
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

// Create Stacks

var squareStack = Composites.stack(40,60, 4, 4, 0, 0, function (x,y){
    return Bodies.rectangle(x, y, 40, 40, {
        render: {
            fillStyle: '#70FFF0',
            strokeStyle: 'black',
            lineWidth: 2
        } 

    });
});

var circleStack = Composites.stack(300,50, 4, 4, 0, 0, function (x,y){
    return Bodies.polygon(x, y, 20, 20, {
        render: {
            fillStyle: '#6EFF43',
            strokeStyle: 'black',
            lineWidth: 2
        } 

    });
});

var octagonStack = Composites.pyramid(500,50, 11, 5, 0, 0, function (x,y){
    return Bodies.polygon(x, y, 1, 20, {
        render: {
            fillStyle: '#C070FF',
            strokeStyle: 'black',
            lineWidth: 2
        } 

    });
});

var trapezoidStack = Composites.stack(980,50, 4, 4, 0, 0, function (x,y){
    return Bodies.polygon(x, y, 8, 20, {
        render: {
            fillStyle: '#FF4343',
            strokeStyle: 'black',
            lineWidth: 2
        } 

    });
})

var triangleStack = Composites.pyramid(1250,50, 9, 8, 0, 0, function (x,y){
    return Bodies.polygon(x, y, 3, 20, {
        render: {
            fillStyle: '#F1FF43',
            strokeStyle: 'black',
            lineWidth: 2
        } 

    });
});
;

//Create ground

ground = Bodies.rectangle(750, 606, 1700, 50.5,  { isStatic: true });

Composite.add(world, [squareStack, circleStack, triangleStack, octagonStack, trapezoidStack,ground ]);

var mouse = Mouse.create(render.canvas),
    mouseConstraint =MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

render.mouse = mouse;

