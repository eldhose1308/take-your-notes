const defineRule = () => {

    const validator = {
        fieldProperties: {},

        build: function() {
            return this.fieldProperties
        },

        required: function() {
            this.fieldProperties.required = true;
            return this;
        },

        min: function (value) {
            this.fieldProperties.min = value;
            return this;
        },

        max: function (value) {
            this.fieldProperties.max = value;
            return this;
        },

        exact: function (value) {
            this.fieldProperties.exact = value;
            return this;
        },

        email: function () {
            this.fieldProperties.email = true;
            return this;
        },
        
        password: function () {
            this.fieldProperties.password = true;
            return this;
        }
    };
    return validator
}

export default defineRule