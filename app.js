var data = {
    items: {
        list: {},
        fetch: function() {
            // Request to a server
            data.items.list = { items: [
                {name: "Item1", description: "Description1"},
                {name: "Item2", description: "Description2"},
                {name: "Item3", description: "Description3"}
            ]}
        }
    }
}

const header = {
    view: function() {
        return m("header", [
            m("h1", {style: "color: white;"} ,"RAMEN MAN"),
            m("nav", [
                m(m.route.Link, {href: "/"}, "Home"),
                m(m.route.Link, {href: "/about"}, "About"),
                m(m.route.Link, {href: "/menu"}, "Menu")
            ])
        ])
    }
}

const footer = {
    view: function() {
        // return m("footer", "Footer content")
    }
}

const template = {
    view: function(vnode) {
        return [
            m(header),
            m("main", vnode.children),
            m(footer)
        ]
    }
}

const homeContent = {
    view: function() {
        // Elements...
    }
}

const aboutContent = {
    view: function() {
        return m("p", "Hello, about!");
    }
}

const menuContent = {
    oninit: data.items.fetch,
    view: function() {
        return data.items.list.items.map(function(item) {
            return m("div", [
                m("h1", item.name),
                m("p", item.description)
            ])
        })
    }
}

m.route(document.body, "/", {
    "/": {
        render: function() {
            document.title = "Ramen Man - Home";
            return m(template, m(homeContent));
        }
    },
    "/about": {
        render: function() {
            document.title = "Ramen Man - About";
            return m(template, m(aboutContent));
        }
    },
    "/menu": {
        render: function() {
            document.title = "Ramen Man - Menu";
            return m(template, m(menuContent));
        }
    }
})