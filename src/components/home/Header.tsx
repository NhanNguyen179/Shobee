import useMediaQuery from "@material-ui/core/useMediaQuery";
import mainImageBigger from "../../img/mainBiggerScreen.jpg";
import mainMobile from "../../img/mainMobile.jpg";
import MainButton from "./MainButton";

export default function Header() {
    const isMobile = useMediaQuery("(max-width:599px)");

    return (
        <div
            className="main-image"
            style={
                isMobile
                    ? {
                          backgroundImage: `url(${mainMobile})`,
                          backgroundPosition: "center center",
                      }
                    : {
                          backgroundImage: `url(${mainImageBigger})`,
                          backgroundPosition: "center left",
                      }
            }
        >
            <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
                <div
                    className={
                        isMobile
                            ? "main-text_mobile"
                            : "main-text_bigger-screen"
                    }
                >
                    Người bạn
                    <br />
                    tại nhà
                    <br />
                    không thể thiếu
                    {!isMobile && (
                        <div className="sub-text_bigger-screen">
                            Đầy đủ sản phẩm, màu sắc, kích cỡ, giá cả phù hợp.
                            Phù hợp với trẻ nhỏ, trẻ lớn, người già, người trẻ,
                            người yêu thú cưng.
                        </div>
                    )}
                </div>
                <MainButton />
            </div>
        </div>
    );
}
