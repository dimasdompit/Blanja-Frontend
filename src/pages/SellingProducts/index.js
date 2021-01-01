import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Gap, Headline, ImageUpload, Input, Subtext } from '../../components'
import swal from 'sweetalert'
import './sellingProducts.scss'

// Redux
import { connect } from 'react-redux'
import { getAllProducts, getProductDetails, addProducts, updateProducts } from '../../config/Redux/actions/products'
import { getProductImagesByProductId, insertProductImages, deleteProductImages } from '../../config/Redux/actions/productImages'
import { getAllCategories } from '../../config/Redux/actions/categories'
import { getAllColors } from '../../config/Redux/actions/colors'
import { getAllConditions } from '../../config/Redux/actions/conditions'
import { getAllSizes } from '../../config/Redux/actions/sizes'

class SellingProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            colors: [],
            conditions: [],
            sizes: [],
            productId: props.location.state !== undefined ? props.location.state.productId : null,
            isUpdate: props.location.state !== undefined ? props.location.state.isUpdate : false,
            product_name: '',
            imagesFromApi: [],
            images: [],
            price: 0,
            stock: 0,
            condition_id: 1,
            category_id: 1,
            size_id: 1,
            color_id: 1,
            description: ''
        }
    }

    /**
     * Fetch API Function Sections
     * e.g (Products, Product Images, Categories, Colors, Conditions & Size)
     */

    /* =============================== GET PRODUCT DETAILS FROM API =============================== */
    getProductDetailsFromAPI = async () => {
        const id = this.state.productId;

        try {
            const response = await this.props.getProductDetails(id);
            const newData = response.value.data.data;
            this.setState({
                product_name: newData.product_name,
                price: newData.price,
                stock: newData.stock,
                description: newData.description,
                condition_id: newData.condition_name.id,
                category_id: newData.category.id,
                size_id: newData.size.id,
                color_id: newData.color.id,
            })
        } catch (error) {
            console.log(error)
        }
    }

    /* =============================== GET PRODUCT IMAGES BY ID FROM API =============================== */
    getProductImagesByProductIdFromAPI = async () => {
        const id = this.state.productId;

        try {
            const response = await this.props.getProductImagesByProductId(id);
            const newData = response.value.data.data;
            this.setState({
                imagesFromApi: newData,
            })
        } catch (error) {
            console.log(error)
        }
    }

    /* =============================== GET ALL CATEGORIES FROM API =============================== */
    getAllCategoriesFromAPI = async () => {
        try {
            const response = await this.props.getAllCategories()
            const newData = response.value.data.data;
            this.setState({ categories: newData })
        } catch (error) {
            console.log(error.response)
        }
    }

    /* =============================== GET ALL COLORS FROM API =============================== */
    getAllColorsFromAPI = async () => {
        try {
            const response = await this.props.getAllColors()
            const newData = response.value.data.data;
            this.setState({ colors: newData })
        } catch (error) {
            console.log(error.response)
        }
    }

    /* =============================== GET ALL CONDITIONS FROM API =============================== */
    getAllConditionsFromAPI = async () => {
        try {
            const response = await this.props.getAllConditions()
            const newData = response.value.data.data;
            this.setState({ conditions: newData })
        } catch (error) {
            console.log(error.response)
        }
    }

    /* =============================== GET ALL SIZES FROM API =============================== */
    getAllSizesFromAPI = async () => {
        try {
            const response = await this.props.getAllSizes()
            const newData = response.value.data.data;
            this.setState({ sizes: newData })
        } catch (error) {
            console.log(error.response)
        }
    }


    /**
     * Post, Update & Delete function for Product and Product Images handler
     */

    /* =============================== POST PRODUCT TO API =============================== */
    postProductToAPI = async () => {
        const token = this.props.auth.data.token;
        const formData = new FormData();

        formData.append('product_name', this.state.product_name);
        this.state.images.forEach((image) => {
            formData.append('image[]', image)
        })
        formData.append('price', Number(this.state.price));
        formData.append('stock', parseInt(this.state.stock));
        formData.append('condition_id', parseInt(this.state.condition_id));
        formData.append('category_id', parseInt(this.state.category_id));
        formData.append('size_id', parseInt(this.state.size_id));
        formData.append('color_id', parseInt(this.state.color_id));
        formData.append('description', this.state.description);

        try {
            const response = await this.props.addProducts(token, formData)
            console.log(response)
            await this.props.getAllProducts()
            swal({
                icon: "success",
                title: `Add Product Success`,
                showConfirmaButton: false,
                timer: 3000,
            });
            setTimeout(() => {
                this.props.history.push('/profile/my-products')
            }, 3000);
        } catch (error) {
            console.log(error.response)
        }
    }

    /* =============================== PUT PRODUCT TO API =============================== */
    putProductToAPI = async () => {

        const token = this.props.auth.data.token;
        const id = this.state.productId;
        const formData = new FormData();

        formData.append('product_name', this.state.product_name);
        formData.append('price', Number(this.state.price));
        formData.append('stock', parseInt(this.state.stock));
        formData.append('condition_id', parseInt(this.state.condition_id));
        formData.append('category_id', parseInt(this.state.category_id));
        formData.append('size_id', parseInt(this.state.size_id));
        formData.append('color_id', parseInt(this.state.color_id));
        formData.append('description', this.state.description);

        try {
            const response = await this.props.updateProducts(token, id, formData)
            console.log(response)
            await this.props.getAllProducts()
            swal({
                icon: "success",
                title: `Update Product Success`,
                showConfirmaButton: false,
                timer: 3000,
            });
            setTimeout(() => {
                this.props.history.push('/profile/my-products')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    insertProductImagesToAPI = async () => {
        const token = this.props.auth.data.token;

        const imageData = new FormData()
        imageData.append('product_id', this.state.productId)

        this.state.images.forEach((image) => {
            imageData.append('image[]', image)
        })
        try {
            await this.props.insertProductImages(token, imageData)
            this.getProductImagesByProductIdFromAPI()
            this.setState({ images: [] })
        } catch (error) {
            console.log(error)
        }
    }

    /* =============================== DELETE PRODUCT IMAGE FROM API =============================== */
    deleteProductImagesFromAPI = async (imageId) => {
        const token = this.props.auth.data.token;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        const response = await this.props.deleteProductImages(token, imageId);
                        this.getProductImagesByProductIdFromAPI()
                        console.log(response.value)
                    } catch (error) {
                        console.log(error.response);
                    }
                }
            });
    }

    /**
     * 
     * Other handler function
     * e.g (file handler change, set file url, delete selected image handler, display uploaded files)
     */
    /* =============================== FILE HANDLER CHANGE =============================== */
    fileHandlerChange = (e) => {
        const images = [...this.state.images]
        images.push(...e.target.files)
        this.setState({ images })
        // this.setFileUrls(images)
    }

    /* =============================== SET FILE URL HANDLER =============================== */
    // setFileUrls = (files) => {
    //     const urls = files.map((file) => URL.createObjectURL(file))
    //     if (this.state.urls.length > 0) {
    //         this.state.urls.forEach((url) => URL.revokeObjectURL(url))
    //     }
    //     this.setState({ urls })
    // }

    /* =============================== DISPLAY COMPONENT FOR SELECTED UPLOAD IMAGE =============================== */
    displayUplodedFiles = (urls) => {
        return urls.map((url, i) => (
            <div key={i} className='image__upload__wrapper'>
                <img className='image_product' src={URL.createObjectURL(url)} />
                <Button variant='primary-round' title='Delete' onClick={() => this.deleteSelectedImage(url)} />
            </div>
        ))
    }

    /* =============================== HANDLE DELETE FOR SELECTED UPLOAD IMAGE =============================== */
    deleteSelectedImage = (image) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    const images = this.state.images.filter(item => item.name !== image.name)

                    this.setState({ images })
                }
            });
    }

    /* =============================== HANDLE SUBMIT TO API =============================== */
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.isUpdate) {
            this.insertProductImagesToAPI()
            this.putProductToAPI()
        } else {
            this.postProductToAPI()
        }
    }

    componentDidMount() {
        this.getAllCategoriesFromAPI();
        this.getAllColorsFromAPI();
        this.getAllConditionsFromAPI();
        this.getAllSizesFromAPI();

        if (this.state.productId !== null && this.state.isUpdate !== false) {
            this.getProductDetailsFromAPI()
            this.getProductImagesByProductIdFromAPI()
        }
    }

    render() {
        const {
            categories,
            colors,
            conditions,
            sizes,
            product_name,
            price,
            stock,
            description,
            category_id,
            size_id,
            color_id,
            condition_id
        } = this.state
        return (
            <div className="selling__products__wrapper">
                <div className="selling__content">
                    <Headline type='h3' title='Inventory' style={{ fontSize: 20 }} />
                    <hr style={{ border: 'none', height: 2, color: '#D4D4D4', backgroundColor: '#D4D4D4' }} />
                    <Subtext title='Name of goods' />
                    <Gap height={8} />
                    <Input type='text' value={product_name} onChange={(e) => this.setState({ product_name: e.target.value })} />
                </div>
                <div className="selling__content">
                    <Headline type='h3' title='Item Details' style={{ fontSize: 20 }} />
                    <hr style={{ border: 'none', height: 2, color: '#D4D4D4', backgroundColor: '#D4D4D4' }} />
                    <Subtext title='Unit price' />
                    <Gap height={8} />
                    <Input type='text' value={price} onChange={(e) => this.setState({ price: e.target.value })} />

                    <Gap height={30} />

                    <Subtext title='Stock (pcs)' />
                    <Gap height={8} />
                    <Input type='text' value={stock} onChange={(e) => this.setState({ stock: e.target.value })} />

                    <Gap height={30} />

                    <Subtext title='Product condition' />
                    <Gap height={8} />
                    <select name="condition_id" value={condition_id} onChange={(e) => this.setState({ condition_id: parseInt(e.target.value) })}>
                        <option value="">-- Choose Condition --</option>
                        {
                            conditions.map((condition) => (
                                <option key={condition.id} value={condition.id}>{condition.condition_name}</option>
                            ))
                        }
                    </select>

                    <Gap height={30} />

                    <Subtext title='Category' />
                    <Gap height={8} />
                    <select name="category_id" value={category_id} onChange={(e) => this.setState({ category_id: parseInt(e.target.value) })}>
                        <option value="">-- Choose Category --</option>
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.category}</option>
                            ))
                        }
                    </select>

                    <Gap height={30} />

                    <Subtext title='Size' />
                    <Gap height={8} />
                    <select name="size_id" value={size_id} onChange={(e) => this.setState({ size_id: parseInt(e.target.value) })}>
                        <option value="">-- Choose Size --</option>
                        {
                            sizes.map(size => (
                                <option key={size.id} value={size.id}>{size.size}</option>
                            ))
                        }
                    </select>

                    <Gap height={30} />

                    <Subtext title='Color' />
                    <Gap height={8} />
                    <select name="color_id" value={color_id} onChange={(e) => this.setState({ color_id: parseInt(e.target.value) })}>
                        <option value="">-- Choose Color --</option>
                        {
                            colors.map(color => (
                                <option key={color.id} value={color.id}>{color.color}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="selling__content">
                    <Headline type='h3' title='Photo of goods' style={{ fontSize: 20 }} />
                    <hr style={{ border: 'none', height: 2, color: '#D4D4D4', backgroundColor: '#D4D4D4' }} />
                    <div className='selling__images'>
                        {this.state.imagesFromApi.map((data, index) => (
                            <div key={index} className='image__upload__wrapper'>
                                <img className='image_product' src={`${process.env.REACT_APP_API_URL}/images/products/${data.image}`} />
                                <Button variant='primary-round' title='Delete' onClick={() => this.deleteProductImagesFromAPI(data.id)} />
                            </div>
                        ))}
                        {this.state.images.length > 0 && this.displayUplodedFiles(this.state.images)}
                    </div>
                    <ImageUpload onChange={this.fileHandlerChange} disabled={this.state.imagesFromApi.length + this.state.images.length === 4} />
                </div>
                <div className="selling__content">
                    <Headline type='h3' title='Description' style={{ fontSize: 20 }} />
                    <hr style={{ border: 'none', height: 2, color: '#D4D4D4', backgroundColor: '#D4D4D4' }} />
                    <Gap height={8} />
                    <textarea className='selling__description' value={description} onChange={(e) => this.setState({ description: e.target.value })} />
                </div>
                <div style={{ width: 150, marginBottom: 50, right: 0 }}>
                    <Button
                        variant='primary-round'
                        title='Save'
                        padding={14}
                        onClick={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
    productImages: state.productImages,
    categories: state.categories,
    colors: state.colors,
    conditions: state.conditions,
    sizes: state.sizes
})

const mapDispatchToProps = {
    getProductDetails,
    getAllCategories,
    getAllColors,
    getAllConditions,
    getAllSizes,
    getAllProducts,
    addProducts,
    updateProducts,
    getProductImagesByProductId,
    insertProductImages,
    deleteProductImages
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SellingProducts))
