var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');
var $ = require('jquery-browserify');
var Utils = require('./../utils.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.addresses = [];
        this.selectedAddress = { 
            first_part:''
        };
        this.bindActions(
            "LOAD_ADDRESSES_SUCCESS", this.loadAddressesSuccess
        );
    },
    loadAddressesSuccess: function (addresses) {
        addresses = addresses.slice(0,5);

        var filteredAddresses = [];
        var i = 0;
        $.each(addresses, function (index, address) {
            var localityInFirstPart = false;

            address.first_part = '';

            if (this.isFirstComponent(address, "postal_code")) {
                address.first_part = this.getAddressComponent(address, "postal_code");
            }

            address.first_part +=
                this.getAddressComponent(address, "street_number") +
                this.getAddressComponent(address, "route") +
                this.getAddressComponent(address, "establishment");

            if (address.first_part === '') {
                address.first_part += this.getAddressComponent(address, "locality");
                localityInFirstPart = true;
            }

            if (! localityInFirstPart) {
                address.second_part = this.getAddressComponent(address, "locality");
            }

            if (address.first_part === '') {
                address.first_part += this.getAddressComponent(address, "country");
            }

            address.second_part =
                this.getAddressComponent(address, "postal_town");

            if (address.second_part === '') {
                address.second_part += this.getAddressComponent(address, "administrative_area_level_2");
            }
            address.key = i;
            i++;
            filteredAddresses.push(address);

        }.bind(this));

        this.addresses = filteredAddresses;
        if (this.addresses.length > 0) {
            this.selectedAddress = this.addresses[0];
        }
        this.emit("change");
    },
    selectAddress: function (key) {
        key = parseInt(key);
        this.selectedAddress = this.addresses.filter(function (address) {
            return address.key === key;
        });
        this.emit("change");
    },
    isFirstComponent: function (address, componentType) {
        return Utils.arrayContains(address.address_components[0].types, componentType);
    },
    getAddressComponent: function (address, componentType) {
        var returnValue = '';
        $.each(address.address_components, function (index, component) {
            if (Utils.arrayContains(component.types, componentType)) {
                returnValue = component.long_name + ' ';
            }
        });
        return returnValue;
    },
    addressHasComponentType: function (address, type) {
        var returnVal = false;

        $.each(address.address_components, function (index, component) {
            if (! Utils.arrayContains(component.types, type)) {
                return true;
            }

            returnVal = true;
        });

        return returnVal;
    },
    getAddresses: function () {
        return this.addresses;
    },
    getSelectedAddress: function () {
        return this.selectedAddress;
    }
});