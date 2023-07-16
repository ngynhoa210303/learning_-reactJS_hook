// import React, { useState, useEffect } from "react";
// import "../../styles/FetchData.scss";
// import data from "../../assets/people_0.json";
// // import axios from "axios";
// import moment from "moment";
// import ReactPaginate from "react-js-pagination";
// const FetchData = () => {
//   let [dataCovid, setDataCovid] = useState([]);
//   const [activePage, setActivePage] = useState(1);
//   const itemsPerPage = 10; // Số lượng mục trên mỗi trang
//   const totalItems = data.length; // Tổng số mục
//   // componentDidMount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const start = (activePage - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         const dataSlice = data.slice(start, end);

//         if (dataSlice && dataSlice.length > 0) {
//           const formattedData = dataSlice.map((item) => {
//             item.Date = moment(item.Date).format("DD/MM/YYYY");
//             return item;
//           });

//           setDataCovid(formattedData);
//         }
//       } catch (error) {
//         console.log("Lỗi khi xử lý dữ liệu:", error);
//       }
//     };

//     fetchData();
//   }, [activePage]);

//   const handlePageChange = (pageNumber) => {
//     setActivePage(pageNumber);
//   };

//   return (
//     <>
//       <h3>Fetch Json API</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Avata</th>
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Gender</th>
//             <th>Job</th>
//             <th>Salary</th>
//             <th>Slogan</th>
//             <th>Email</th>
//             <th>Country</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataCovid &&
//             dataCovid.length > 0 &&
//             dataCovid.map((item) => {
//               return (
//                 <tr key={item.id}>
//                   <td>
//                     {/* eslint-disable-next-line jsx-a11y/alt-text */}
//                     <img src={item.avatar} />
//                   </td>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.job}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.slogan}</td>
//                   <td>{item.email}</td>
//                   <td>{item.country}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//       <ReactPaginate
//         activePage={activePage}
//         itemsCountPerPage={itemsPerPage}
//         totalItemsCount={totalItems}
//         pageRangeDisplayed={5}
//         onChange={handlePageChange}
//         prevPageText="Prev"
//         nextPageText="Next"
//         firstPageText="First"
//         lastPageText="Last"
//       />
//     </>
//   );
// };

// export default FetchData;
// import React, { useState, useEffect } from "react";
// import "../../styles/FetchData.scss";
// import data from "../../assets/people_0.json";
// // import axios from "axios";
// import moment from "moment";

// const FetchData = () => {
//   const [dataCovid, setDataCovid] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9; // Số lượng mục trên mỗi trang
//   const totalItems = data.length; // Tổng số mục
//   const totalPages = Math.ceil(totalItems / itemsPerPage); // Tổng số trang
//   const threshold = 5; // Ngưỡng cuộn xuống trước khi tải thêm trang

//   // Lấy dữ liệu cho trang hiện tại
//   const fetchData = (page) => {
//     setIsLoading(true);

//     // Mô phỏng việc tải dữ liệu trong 2 giây
//     setTimeout(() => {
//       const start = (page - 1) * itemsPerPage;
//       const end = start + itemsPerPage;
//       const dataSlice = data.slice(start, end);

//       if (dataSlice && dataSlice.length > 0) {
//         const formattedData = dataSlice.map((item) => {
//           item.Date = moment(item.Date).format("DD/MM/YYYY");
//           return item;
//         });

//         // Nếu đang ở trang đầu tiên, thay đổi dữ liệu hoàn toàn
//         if (page === 1) {
//           setDataCovid(formattedData);
//         } else {
//           // Nếu không phải trang đầu tiên, chỉ thêm dữ liệu mới
//           setDataCovid((prevData) => [...prevData, ...formattedData]);
//         }
//       }

//       setIsLoading(false);
//     }, 2000);
//   };

//   useEffect(() => {
//     fetchData(currentPage);
//   }, [currentPage]);

//   const handleScroll = () => {
//     const scrollHeight =
//       document.documentElement.scrollHeight || document.body.scrollHeight;
//     const scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;

//     if (
//       !isLoading &&
//       scrollHeight - scrollTop - clientHeight < threshold &&
//       currentPage < totalPages
//     ) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isLoading, currentPage]);

//   return (
//     <>
//       <h3>Fetch Json API</h3>
//       <table>
//         <thead>{/* Header bảng */}</thead>
//         <tbody>
//           {dataCovid &&
//             dataCovid.length > 0 &&
//             dataCovid.map((item) => {
//               return (
//                 <tr key={item.id}>
//                   <td>
//                     {/* eslint-disable-next-line jsx-a11y/alt-text */}
//                     <img src={item.avatar} />
//                   </td>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.job}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.slogan}</td>
//                   <td>{item.email}</td>
//                   <td>{item.country}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//       {isLoading && <div>Loading...</div>}
//     </>
//   );
// };

// export default FetchData;

import React, { useState, useEffect } from "react";
import "../../styles/FetchData.scss";
import data from "../../assets/people_0.json";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

const FetchData = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Số lượng mục trên mỗi trang
  const totalItems = data.length; // Tổng số mục
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Tổng số trang
  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    setTimeout(() => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const dataSlice = data.slice(start, end);

      if (dataSlice && dataSlice.length > 0) {
        const formattedData = dataSlice.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });

        if (currentPage === 1) {
          setDataCovid(formattedData);
          setHasLoadedInitialData(true);
        } else {
          setDataCovid((prevData) => {
            const newData = prevData.slice(0, -1); // Loại bỏ phần tử cuối cùng
            return [...newData, ...formattedData];
          });
        }
      }

      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleLoadMore = () => {
    if (!isLoading && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <h3>Fetch Json API</h3>
      <div></div>
      {hasLoadedInitialData ? (
        <InfiniteScroll
          dataLength={dataCovid.length}
          next={handleLoadMore}
          hasMore={currentPage < totalPages}
          loader={<div>Loading...</div>}
          style={{ display: "flex", flexDirection: "column" }} // Đặt flex-direction: column để các phần tử nằm dọc
          scrollableTarget="scrollableDiv" // Đặt scrollableTarget để chỉ định element được cuộn
        >
          <table>
            <thead>
              <tr>
                <th>Avata</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Gender</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Slogan</th>
                <th>Email</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {dataCovid.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.avatar} alt="" />
                    </td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.gender}</td>
                    <td>{item.job}</td>
                    <td>{item.salary}</td>
                    <td>{item.slogan}</td>
                    <td>{item.email}</td>
                    <td>{item.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </InfiniteScroll>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default FetchData;
