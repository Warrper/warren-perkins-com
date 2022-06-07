import BlogContent from '.';

export default {
    title: 'BlogContent',
};

const args = {};
const params = {
    backgrounds: { default: 'dark' },
};

export const Default = (args: any) => (
    <>
        <BlogContent {...args}>
            <h1>Blog Content</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam cumque itaque inventore sequi harum
                porro, tempora est? Culpa, fugiat.
            </p>
            <img src="https://picsum.photos/1920/1080" alt="example-image" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam cumque itaque inventore sequi harum
                porro, tempora est? Culpa, fugiat.
            </p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a at dolor perspiciatis
                voluptatibus officia reiciendis, quisquam nihil cumque nemo repudiandae ex dicta, inventore nostrum
                ducimus recusandae quod similique saepe sit sint deserunt sapiente iure est quis. Delectus porro
                doloremque eveniet sit! Architecto, quisquam iure provident quasi aspernatur aliquid adipisci!
            </p>
            <p>
                <a href="#">Link</a> ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum reprehenderit
                officiis enim possimus recusandae explicabo voluptas corporis, alias, amet exercitationem quasi
                excepturi neque rerum dicta placeat reiciendis, quos cumque labore. Eaque atque, iure architecto minima
                quasi quo! Assumenda saepe doloremque odit exercitationem quaerat minima impedit aliquam maxime
                reiciendis aut!
            </p>
        </BlogContent>
    </>
);
Default.parameters = params;
Default.args = args;
