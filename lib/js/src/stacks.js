(() => {
    const application = Stimulus.Application.start()

    application.register("s-modal", class extends Stimulus.Controller {
        static get targets() {
            return [ "name" ]
        }

        connect() {
            console.log("Hello, Stimulus!", this.element)
        }
    })
})()