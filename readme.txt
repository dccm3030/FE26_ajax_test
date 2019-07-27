//kéo thùng ch?a v? máy tính
git clone " url() trên github"

// câu l?nh config l?n d?u khi t?o git, nh?ng l?n sau déo c?n
git config --global user.name " tên user"
git config --global user.email "tên email, trùng v?i tk github"

// câu l?nh ki?m tra tr?ng thái
git status
	/* 
		n?u tr?ng thái màu d?: ? phân vùng Working copy
		n?u tr?ng thái màu xanh: ? phân vùng Staging area
	/*
// câu l?nh di chuy?n code t? Working -> stagging
git add . /* add t?t c? các file
// câu l?nh giúp di chuy?n code t? Staging -> local repository
git commit -m "ghi chú code"
// câu l?nh giúp d?y code t? local repos -> remote repos
git push origin <tên nhánh>