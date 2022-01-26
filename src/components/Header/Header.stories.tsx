import { MemoryRouter } from 'react-router-dom';

import Header from '.';
import '../../normalize.css';

export default {
    title: 'Header',
    decorators: [
        (Story: any) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Default = (args: any) => <Header {...args} />;

Default.args = {};
