$(document).ready(() => {
    const unsortedProducts = $('.sortClass').toArray()

    $('#priceSortDropdown').click(() => {
        $('#navbarDropdownMenuLink').text('Sort by Price')

        function compareByPrice(a, b) {
            const priceA = Number($(a).data('price'))
            const priceB = Number($(b).data('price'))
            return priceA - priceB;
        }
        const products = $('.sortClass').toArray();

        products.sort(compareByPrice)
        $('.sortedProductsRow').children().remove()
        products.forEach((product) => $('.sortedProductsRow').append(product));
    });

    $('#typeSortDropdown').click(() => {
        $('#navbarDropdownMenuLink').text('Sort by Type')

        function compareByType(a, b) {
            const typeA = $(a).data('type')
            const typeB = $(b).data('type')
            if (typeA < typeB) {
                return -1;
            }
            if (typeA > typeB) {
                return 1;
            } else {
                return 0;
            }
        }
        const products = $('.sortClass').toArray();

        products.sort(compareByType)
        $('.sortedProductsRow').children().remove()
        products.forEach((product) => $('.sortedProductsRow').append(product));
    });

    $('#unsortDropdown').click(() => {
        $('.sortedProductsRow').children().remove()
        unsortedProducts.forEach((product) => $('.sortedProductsRow').append(product));
    });
});