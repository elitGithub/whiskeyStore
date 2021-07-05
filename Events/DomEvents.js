export class DomEvents {


    static eventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.querySelectorAll('.add-to-cart').length > 0) {
                document.querySelectorAll('.add-to-cart').forEach(element => {
                    element.addEventListener('click', (e) => {
                        console.log(e.target.id);
                    });
                });
            }

            if (document.querySelectorAll('.wish-list').length > 0) {
                document.querySelectorAll('.wish-list').forEach(element => {
                    element.addEventListener('click', (e) => {
                        console.log(e.target.id);
                    });
                });
            }
        });

    }
}