//kéo thùng chứa vào máy tính
git clone " url() trên github"

// câu lệnh config l?n d?u khi t?o git, những lần sau déo cần
git config --global user.name " tên user"
git config --global user.email "tên email, trùng v?i tk github"

// câu lệnh kiểm tra trạng thái
git status
	/* 
		n?u tr?ng thái màu dỏ: ? phân vùng Working copy
		n?u tr?ng thái màu xanh: ? phân vùng Staging area
	/*
// câu l?nh di chuyển code t? Working -> stagging
git add . /* add tất cả các file
// câu l?nh giúp di chuyển code t? Staging -> local repository
git commit -m "ghi chú code"
// câu lệnh giúp dẩy code t? local repos -> remote repos
git push origin <tên nhánh>
