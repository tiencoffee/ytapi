# :electric_plug: ytapi

## Giới thiệu

- Sử dụng API URL để lấy thông tin của video Youtube xác định.
- Máy chủ sử dụng package `node-ytdl`.

## Sử dụng

- URL: Truy vấn `GET` đến URL `https://ytapis.vercel.app/api/simple`
- Tham số bắt buộc:
	- `id`: ID của video Youtube xác định
- Tham số tùy chọn: Xem các tham số trong hàm [chooseFormat](https://github.com/fent/node-ytdl-core#ytdlchooseformatformats-options)
> Nếu sử dụng tham số tùy chọn, thuộc tính `formats` trong kết quả trả về sẽ là một `Object` thay vì `Array`

## Giấy phép

- Giấy phép [ISC](LICENSE)
