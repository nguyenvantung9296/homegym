import React from 'react';
import { Link } from 'react-router-dom';
import './roomgym.css';
import background2 from '../img/PicsArt.jpg'
import background1 from '../img/image-sec3.jpg'
import background3 from '../img/ed6c933692a569fb30b4.jpg'
function RoomGym(props) {
    return (
        <div className="body-room">
            <div className="banner-Yoga banner-roomGym">
                <div class="slider-text">
                    <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                        <h4 className="title-yoga">Phòng Tập</h4>
                        <div></div>
                        <p>Không đầu tư vào sự hào nhoáng, chúng tôi chú trọng đầu tư vào không gian tập, khu chức năng đặc thù và những loại máy tập chuyên dụng mang lại hiệu quả cao nhất cho khách hàng</p>
                        <Link to="/" className="btn-primary">
                            Trang Chủ
                            </Link>
                    </div>
                </div>
            </div>
            <div className="section-room-1">
              <div className="content-room">
                  <div className="content-room-1">
                        <div className="content-room-p1">
                            <h2 className="content-room-p1-h2">SỰ ĐẦU TƯ</h2>
                            <p>Xuất thân từ ngành tài chính, chúng tôi hiểu rằng đánh giá một khoản đầu tư không thể dựa trên chi phí bỏ ra, mà phải đến từ hiệu quả mang lại – tỷ suất sinh lời. Với mục tiêu duy nhất là kết quả của khách hàng, thay vì đầu tư vào những tiện nghi hào nhoáng bên ngoài, chúng tôi tập trung vào những thiết bị có chất lượng cao, đến từ những thương hiệu hàng đầu thế giới, giúp tối ưu hóa quá trình tập luyện.</p>
                            <p >Bởi vậy thay vì đầu tư vào hàng dài các máy chạy – ít có hiệu quả trong việc tăng cơ, giảm mỡ, GymHome tập trung vào hệ tạ tay, các máy tập chuyên biệt và thảm cỏ giữa phòng tập, tạo điều kiện tối đa cho kết quả của khách hàng. Những bài tập này là chìa khóa cho một hệ cơ xương vững chắc, giúp tạo nên một cơ thể khỏe mạnh, cân đối.</p>
                            <p>Đây mới chính là cái chất của Fitness – không chỉ dừng lại ở vẻ đẹp hào nhoáng bên ngoài mà hướng tới việc cải thiện cơ thể, tạo nên nền tảng cho một cuộc sống lành mạnh, hạnh phúc. GymHome tự hào là người tiên phong trong việc đưa mô hình phòng tập kiểu mới về với Việt Nam và kết quả của hàng trăm hội viên là minh chứng đanh thép cho định hướng đúng đắn của GymHome.</p>
                        </div>
                  </div>
                  <div className="content-room-2">
                      <div className="content-room-21">
                      <div className="content-room-21-01">
                          
                          </div>
                          <div className="content-room-21-02">
                          
                      </div>
                      </div>
                      <div className="content-room-22">

                      </div>
                  
                    
                  </div>
              </div>
            </div>

             {/* <div className="section-room-2">
                 <div className="content-sec2-room">
                     <div className="icon-room-sec2">
                     <img  src="https://swequity.vn/wp-content/uploads/2018/03/quote.png"  alt=""/>
                     </div>
                     <div className="sec-2-p">
                         <p>Không khoản đầu tư nào đáng giá hơn chính bạn</p>
                     </div>
                 </div>
             </div> */}
             <div className="section-room-3">
             <div className="content-sec3-room">
                 <div className="content-title-room content-title-room01">
                     <h3>Gym - SỐ 1 Cầu Giấy</h3>
                     <p>Là kết quả của 5 năm dày công đầu tư và nghiên cứu, 6 năm du học nước ngoài, không ngừng học hỏi kiến thức từ những HLV hàng đầu thế giới của Founder Nguyễn Văn Tùng để tạo ra một không gian tập luyện thoải mái, tiện nghi, đầy đủ mọi công năng và tính năng cần thiết</p>
                 </div>
                 <div className="image-room-section3">
                 <img src={background1}/>
                 </div>
             </div>
             </div>
             
                 {/* SECTION 3 */}
                 <div className="section-room-4">
                 <div className="content-title-room content-title-room2">
                     <h3>Gym SỐ 1 Bach Mai</h3>
                     <p>GymHome-2 tận dụng tối đa khoảng không gian của một phòng tập trong phố, để cung cấp đầy đủ những thiết bị và công năng cần thiết, từ các hệ máy, hệ tạ, thảm cỏ tập cho đến phòng thay đồ, v.v. Dựa trên mô hình thành công tại GymHome 1t</p>
                 </div>
                  <div className="image-background-sec-4">
                  <img src={background2}/>
                  </div>
                 </div>
                 
                 <div className="section5-room">
                 <div className="content-title-room content-title-room2">
                     <h3>Gym SỐ 1 Bach Mai</h3>
                     <p>GymHome-3 tận dụng tối đa khoảng không gian của một phòng tập trong phố, để cung cấp đầy đủ những thiết bị và công năng cần thiết, từ các hệ máy, hệ tạ, thảm cỏ tập cho đến phòng thay đồ, v.v. Dựa trên mô hình thành công tại GymHome 1t</p>
                 </div>
                 <div className="image-background-sec-4 image-background-sec-5">
                  <img src={background3}/>
                  </div>
                 </div>
               
        </div>
    );
}

export default RoomGym;