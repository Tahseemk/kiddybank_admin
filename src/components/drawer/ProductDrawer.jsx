import ReactTagInput from "@pathofdev/react-tag-input";
import {
  Button,
  Input,
  TableCell,
  TableContainer,
  TableHeader,
  Textarea,
  Table,
  Select
} from "@windmill/react-ui";
import Multiselect from "multiselect-react-dropdown";
import React, { useState, useContext, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { MultiSelect } from "react-multi-select-component";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Title from "@/components/form/others/Title";
import Error from "@/components/form/others/FormikError";
import LabelArea from "@/components/form/selectOption/LabelArea";
import DrawerButton from "@/components/form/button/DrawerButton";
import useProductSubmit from "@/hooks/useProductSubmit";
import Uploader from "@/components/image-uploader/Uploader";
import { SidebarContext } from "@/context/SidebarContext";
import UploaderThree from "@/components/image-uploader/UploaderThree";
import ProductServices from "@/services/ProductServices";


const ProductDrawer = ({ id }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false)
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);

  const {
    register,
    openModal,
    imageUrl,
    setImageUrl,
    onCloseModal,
    isSubmitting,
    resetRefTwo,
    selectedCategory,
    setDefaultCategory,
    defaultCategory,
    handleSelectLanguage,
    handleSelectImage,

  } = useProductSubmit(id);

  console.log("imageUrlForm", imageUrl)
  console.log("getProductDetail", id)


  useEffect(() => {
    if (id) {
      getProductDetail()
    }
  }, [id])


  const getProductDetail = async () => {
    try {
      const res = await ProductServices.getProductById(id);
      console.log("resDatadffg", res)
      if (res.status === 'true') {
        const product = res.data
        const fields = ["productName", "description", "price", "dailyIncome", "totalIncome", "percentage", "monthly", "planType", "image" ,"risk"];
        fields.forEach(field => formik.setFieldValue(field, product[field], false));
        setImageUrl(product.image)
        console.log("product", product)
      }

      else {
        notifyError(res.message);

      }

      console.log('Product details:', res);
    } catch (error) {
      // Handle the error
      console.error('Error fetching product details:', error.message);
      // You can also throw the error again if you want it to be handled by the calling function or component
      // throw error;
    }
  };



  const formik = useFormik({
    initialValues: {
      productName: '',
      description: '',
      price: '',
      image: imageUrl,
      dailyIncome: '',
      totalIncome: '',
      percentage: '',
      monthly: '',
      planType: "",
      risk: ""
    },

    validationSchema: Yup.object({
      productName: Yup.string()
        .required("This fiels is required")
        .min(3, 'This field must be at least 3 characters'),

      description: Yup.string()
        .min(5, 'This field must be at least 5 characters')
        .required("This field is required"),

      price: Yup.number()
        .typeError('You must specify a number')
        .min(1, "Price must be greater than zero")
        .required("This field is required"),

      dailyIncome: Yup.number()
        .typeError('You must specify a number')
        .min(0, "Please enter a positive number")
        .required("This field is required"),

      totalIncome: Yup.number()
        .required("This field is required")
        .typeError('You must specify a number')
        .min(0, "Please enter a positive number"),

      percentage: Yup.number()
        .required("This field is required")
        .typeError('You must specify a number')
        .min(0, "Please enter a positive number"),

        monthly: Yup.number()
        .required("This field is required")
        .typeError('You must specify a number')
        .min(1, "Month must be greater than zero"),

      planType: Yup.string()
        .required("This fiels is required"),

      risk: Yup.string()
        .required("This fiels is required")
    }),

    onSubmit: async values => {
      let fieldValues = values
      Object.assign(fieldValues, { image: imageUrl })
      try {
        setLoading(true)
        const response = await (id ? ProductServices.updateProduct(id, fieldValues) : ProductServices.addProduct(fieldValues));
        console.log("Response", response)
        setLoading(false);
        if (response.status === "true") {
          notifySuccess(response.message);
          setIsUpdate(true);
          closeDrawer()
        } else {
          notifyError(resData.message || 'An error occurred.');
        }
      } catch (error) {
        setLoading(false)
        const errorMessage = error?.response?.data?.message || error.messaage
        notifyError(errorMessage);
      }
    }
  });

  return (
    <>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        closeIcon={
          <div className="absolute top-0 right-0 text-red-500  active:outline-none text-xl border-0">
            <FiX className="text-3xl" />
          </div>
        }
      >
        <div className="cursor-pointer">
          <UploaderThree
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            handleSelectImage={handleSelectImage}
          />
        </div>
      </Modal>

      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          register={register}
          handleSelectLanguage={handleSelectLanguage}
          title={t("DrawerAddProduct")}
          description={t("AddProductDescription")}
        />
      </div>
      <Scrollbars className="track-horizontal thumb-horizontal w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={formik.handleSubmit} className="block" id="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("ProductTitleName")} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="productName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  type="text"
                  placeholder="Product Name"
                />
                <Error errorName={formik.errors.productName} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Description" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm  block w-full bg-gray-100 border-gray-200"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  name="description"
                  placeholder="Description"
                  rows="4"
                  spellCheck="false"
                />
                <Error errorName={formik.errors.description} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  product
                  folder="product"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Price" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="price"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  type="number"
                  placeholder="Price"
                />
                <Error errorName={formik.errors.price} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label='Daily Income' />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="dailyIncome"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.dailyIncome}
                  type="number"
                  placeholder="Daily Income"
                />
                <Error errorName={formik.errors.dailyIncome} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Total Income" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="totalIncome"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.totalIncome}
                  type="number"
                  placeholder="Total Income"
                />
                <Error errorName={formik.errors.totalIncome} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Percentage" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="percentage"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.percentage}
                  type="number"
                  placeholder="Percentage"
                />
                <Error errorName={formik.errors.percentage} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Total Month" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  name="monthly"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.monthly}
                  type="number"
                  placeholder="Total Month"
                />
                <Error errorName={formik.errors.monthly} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Plan Type" />
              <div className="col-span-8 sm:col-span-4 ">
                <Select
                  name="planType"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.planType}
                >
                  <option value="" defaultValue hidden>
                    Select Plan Type
                  </option>
                  <option value="Short term">Short term</option>
                  <option value="Long term">Long term</option>
                  <option value="Mid term">Mid term</option>
                  <option value="Double money">Double money</option>
                  <option value="Women saving">Women saving</option>
                  <option value="New baby born">New baby born</option>
                </Select>
                <Error errorName={formik.errors.planType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 relative">
              <LabelArea label="Risk" />
              <div className="col-span-8 sm:col-span-4 ">
                <Select
                  name="risk"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.risk}
                >
                  <option value="" defaultValue hidden>
                    Select Risk
                  </option>
                  <option value="Low risk">Low risk</option>
                  <option value="Medium risk">Medium risk</option>
                  <option value="High risk">High risk</option>
                </Select>
                <Error errorName={formik.errors.risk} />
              </div>
            </div>
          </div>
          <DrawerButton id={id} title="Product" isSubmitting={loading} />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(ProductDrawer);
