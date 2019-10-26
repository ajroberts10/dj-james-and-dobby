import React from 'react';
import { mount } from 'enzyme';
import DatePicker from 'react-datepicker';

import ContactModal from './ContactModal';

describe('The ContactModal component', () => {
    const wrapper = mount(<ContactModal />);
    describe('rendering the form fields', () => {
        it('should have an email address field of type email', () => {
            const email = wrapper.find('#email');
            expect(email.exists()).toEqual(true);
            expect(email.prop('type')).toEqual('email');
        });

        it('should have a contact number field of type "tel"', () => {
            const contact = wrapper.find('#contactNumber');
            expect(contact.exists()).toEqual(true);
            expect(contact.prop('type')).toEqual('tel');
        });

        it('should have a name field of type "text"', () => {
            const name = wrapper.find('#fullName');
            expect(name.exists()).toEqual(true);
            expect(name.prop('type')).toEqual('text');
        });

        it('should have an event datepicker field', () => {
            const date = wrapper.find(DatePicker);
            expect(date.exists()).toEqual(true);
        });

        it('should have an event venue field of type text', () => {
            const venue = wrapper.find('#venue');
            expect(venue.exists()).toEqual(true);
            expect(venue.prop('type')).toEqual('text');

        });

        it('should have an event start time field', () => {
            const startTime = wrapper.find('#startTime');
            expect(startTime.exists()).toEqual(true);
        });

        it('should have an event end time field', () => {
            const startTime = wrapper.find('#endTime');
            expect(startTime.exists()).toEqual(true);
        });

        it('should have a package select box with 5 options', () => {
            const packageSelect = wrapper.find('select');
            expect(packageSelect.exists()).toEqual(true);
            expect(packageSelect.find('option').length).toEqual(5);
        });

        it('should have a message field of type text', () => {
            const message = wrapper.find('textarea');
            expect(message.exists()).toEqual(true);
            expect(message.prop('placeholder')).toEqual('tell us more about your event');
        });
    })
});
