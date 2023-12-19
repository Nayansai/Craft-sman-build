type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js",
("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);

function initSimulation() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var engine = Engine.create(),
        world = engine.world;
    var containerElement = document.querySelector(".tag-canvas");
    var containerWidth = containerElement.clientWidth + 2;
    var containerHeight = containerElement.clientHeight + 2;

    var render = Render.create({
        element: containerElement,
        engine: engine,
        options: {
            width: containerWidth,
            height: containerHeight,
            pixelRatio: 2,
            background: "transparent",
            border: "none",
            wireframes: false
        }
    });

    var ground = Bodies.rectangle(
        containerWidth / 2 + 160,
        containerHeight + 80,
        containerWidth + 320,
        160,
        { render: { fillStyle: "#000000" }, isStatic: true }
    );
    var wallLeft = Bodies.rectangle(
        -80,
        containerHeight / 2,
        160,
        containerHeight,
        { isStatic: true }
    );
    var wallRight = Bodies.rectangle(
        containerWidth + 80,
        containerHeight / 2,
        160,
        1200,
        { isStatic: true }
    );
    var roof = Bodies.rectangle(
        containerWidth / 2 + 160,
        -80,
        containerWidth + 320,
        160,
        { isStatic: true }
    );

    var border = 1;
    var radius = 20;

    var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47541d38f6886e5747c1d_uiux.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagWordpress = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540055ab00edffa0a68_wordpress.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagWebflow = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475405a7c8ff69c27ed37_webflow.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagWhitelevel = Bodies.rectangle(containerWidth / 2 - 75, 380, 160, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540c9a2047edbb293d1_whitelevel.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });

    var tagWebflowgreen = Bodies.rectangle(
        containerWidth / 2 - 74,
        540,
        248,
        56,
        {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture:
                        "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540487abf2c397d777f_webflow-green.svg",
                    xScale: 1,
                    yScale: 1
                }
            }
        }
    );
    var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475407ebe06e52f9283d1_sass.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540f762b61424410849_web.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 128, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475402ae28c15adeba62f_startup.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagMaintence = Bodies.rectangle(containerWidth / 2 - 242, 420, 168, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540f86ad4f4175a1e69_maintence.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagIntegration = Bodies.rectangle(containerWidth / 2 + 60, 380, 155, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540035d9b03fc33e447_integration.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 180, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475405a7c8ff69c27ed00_motion.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 172, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475406ef461a95eaa0f12_pay.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagGsap = Bodies.rectangle(containerWidth / 2 - 59, 260, 115, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540f86ad4f4175a1df1_gsap.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagFigma = Bodies.rectangle(containerWidth / 2 - 59, 260, 210, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f475407a05afc618131310_figma.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });
    var tagMigration = Bodies.rectangle(containerWidth / 2 - 59, 260, 145, 56, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture:
                    "https://assets-global.website-files.com/64f41ea3b31af27272713c03/64f47540bfb0eee6858d556a_migration.svg",
                xScale: 1,
                yScale: 1
            }
        }
    });

    World.add(engine.world, [
        ground,
        wallLeft,
        wallRight,
        roof,
        tagUiUx,
        tagWordpress,
        tagWebflow,
        tagWhitelevel,
        tagWebflowgreen,
        tagSass,
        tagWeb,
        tagStartup,
        tagMaintence,
        tagIntegration,
        tagMotion,
        tagPay,
        tagGsap,
        tagFigma,
        tagMigration
    ]);

    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    render.mouse = mouse;

    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
        console.log(click ? "click" : "drag")
    );

    Events.on(mouseConstraint, "mouseup", function (event) {
        var mouseConstraint = event.source;
        var bodies = engine.world.bodies;
        if (!mouseConstraint.bodyB) {
            for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                if (click === true) {
                    if (
                        Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
                    ) {
                        var bodyUrl = body.url;
                        console.log("Body.Url >> " + bodyUrl);
                        if (bodyUrl != undefined) {
                            window.open(bodyUrl, "_blank");
                            console.log("Hyperlink was opened");
                        }
                        break;
                    }
                }
            }
        }
    });

    Engine.run(engine);

    Render.run(render);
}

var containerElement = document.querySelector(".tag-canvas");

var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            initSimulation();
            observer.disconnect();
        }
    });
}, {});

observer.observe(containerElement);
