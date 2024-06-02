import { useState } from 'react'
import UiInput from './UiInput'

export default {
    title: 'Ui-Kit/UiInput',
    component: UiInput,
}

const Template = (args) => {
    const [value, setValue] = useState('');

    const handelInputChange = value => {
        setValue(value);
    }

    return (
        <UiInput
            {...args}
            value={value}
            handelInputChange={handelInputChange}
        />
    )
}

const props = {
    value: '',
    handleInputChange: () => console.log('input change'),
    placeholder: 'placeholder',
    classes: '',
}

export const Default = Template.bind({});

Default.args = {
    ...props,
};
