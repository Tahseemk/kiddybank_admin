import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import { t } from "i18next";
import { FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";

//internal import
import MainDrawer from "@/components/drawer/MainDrawer";
import ProductDrawer from "@/components/drawer/ProductDrawer";
import CheckBox from "@/components/form/others/CheckBox";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ShowHideButton from "@/components/table/ShowHideButton";
import Tooltip from "@/components/tooltip/Tooltip";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import useUtilsFunction from "@/hooks/useUtilsFunction";

//internal import

const ProductTable = ({ products, isCheck, setIsCheck }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { currency, showingTranslateValue, getNumberTwo } = useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    // console.log("id", id, checked);

    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  console.log("Products" , products)

  return (
    <>
      {isCheck?.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck?.length < 2 && (
        <MainDrawer>
          <ProductDrawer currency={currency} id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>

            {/* <TableCell>
              <CheckBox
                type="checkbox"
                name={product?.productName}
                id={product._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(product._id)}
              />
            </TableCell> */}

            <TableCell>
              <div className="flex items-center">
                {product?.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                     src={product?.image}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )}
                <div>
                  <h2
                    className={`text-sm font-medium ${
                      product?.productName 
                    }`}
                  >
                    {product?.productName?.substring(0, 28)}
                  </h2>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                { getNumberTwo(product?.price)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  { getNumberTwo(product?.dailyIncome)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  { getNumberTwo(product?.totalIncome)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  { getNumberTwo(product?.monthly)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  { getNumberTwo(product?.totalDays)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  { getNumberTwo(product?.percentage)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  {product?.planType}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                  {product?.risk}
              </span>
            </TableCell>

            {/* <TableCell className="text-center">
              <ShowHideButton id={product._id} status={product.status} />
              {product.status}
            </TableCell> */}
            <TableCell>
              <EditDeleteButton
                id={product._id}
                product={product}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(product?.title)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ProductTable;
