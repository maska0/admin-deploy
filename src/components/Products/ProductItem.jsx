import { Link } from "react-router-dom";
import { PRODUCT_DELETE, PRODUCT_DETAIL, PRODUCT_UPDATE } from "../../utils/consts";
import eye from "../../assets/image/eye.svg";
import izmenit from "../../assets/image/izmenit.svg";
import trash from "../../assets/image/trash-fill 1.svg" ;

function ProductItem ({product}) {
    return(
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td colSpan="3" class="actions-products" style={{border: "none"}}>
                                    <Link to={PRODUCT_DETAIL.substring(0, PRODUCT_DETAIL.length - 3) + product.id} class="btn bg-danger" >
                                        <img src={eye} alt="Смотреть" class="table-element" />
                                    </Link>
                                    <Link to={PRODUCT_UPDATE.substring(0, PRODUCT_UPDATE.length - 3) + product.id} class="btn bg-danger" >
                                        <img src={izmenit} alt="Изменить" class="table-element" />
                                    </Link>
                                    <Link to={PRODUCT_DELETE.substring(0, PRODUCT_DELETE.length - 3) + product.id} class="btn bg-danger" >
                                        <img src={trash} alt="Удалить" class="table-element" />
                                    </Link>
                                </td>
                            </tr>
    ) ;

}

export default ProductItem ; 