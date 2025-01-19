// Dữ liệu ban đầu cho bảng (100 hàng và 20 cột)
var data = Array.from({length: 100}, () => Array(20).fill(''));

// Tạo đối tượng Handsontable và gắn vào div có id là example1
var container = document.querySelector('#example1');
var hot = new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: Array.from({length: 20}, (_, i) => 'Column ' + (i + 1)),
  licenseKey: 'non-commercial-and-evaluation'  // Miễn phí cho mục đích phi thương mại
});
// Lưu dữ liệu bảng vào LocalStorage
function saveData() {
    var data = hot.getData();
    localStorage.setItem('tableData', JSON.stringify(data));  // Lưu dữ liệu dưới dạng chuỗi JSON
  }
  
  // Lấy dữ liệu đã lưu từ LocalStorage
  function loadData() {
    var savedData = localStorage.getItem('tableData');
    if (savedData) {
      hot.loadData(JSON.parse(savedData));  // Tải dữ liệu đã lưu
    }
  }
  
  // Gọi hàm loadData khi trang được tải
  loadData();