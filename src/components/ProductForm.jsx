import React from 'react';

function ProductForm(){
    return (
        <div>
        <h1>Product Form</h1>
        <form>
            <label>
                Title : <input type="text" name="title" />
                Gender : <input type= "text" name='gender' />
                Category : <input type= "text" name='category' />
                Price : <input type= "number" name='price' />
                Image : <input type= "file" name = "image"/>
            </label>
        </form>
        </div>
    );
}

export default ProductForm;

// title gender category price image