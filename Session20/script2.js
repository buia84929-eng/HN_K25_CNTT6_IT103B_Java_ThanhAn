let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editId = null;

// Hàm hiển thị danh sách (Render)
function renderSongs(data = songs) {
    const songTable = document.getElementById("songTable");
    songTable.innerHTML = "";

    data.forEach((song) => {
        songTable.innerHTML += `
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button class="btn-edit" onclick="editSong(${song.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

//  Thêm hoặc Cập nhật bài hát
function handleSubmit() {
    const titleInput = document.getElementById("title");
    const artistInput = document.getElementById("artist");
    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    // Validation
    if (!title || !artist) {
        alert("Vui lòng nhập đầy đủ Tên bài hát và Ca sĩ!");
        return;
    }

    if (editId !== null) {
        // Cập nhật bài hát
        songs = songs.map(s => s.id === editId ? { ...s, title, artist } : s);
        editId = null;
        document.getElementById("submitBtn").innerText = "Thêm";
        document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
    } else {
        // Thêm mới (ID tự tăng)
        const newId = songs.length > 0 ? songs[songs.length - 1].id + 1 : 1;
        songs.push({ id: newId, title, artist });
    }

    saveAndRender();
    titleInput.value = "";
    artistInput.value = "";
}

// Chức năng 3: Đổ dữ liệu lên form để sửa
function editSong(id) {
    const song = songs.find(s => s.id === id);
    if (song) {
        document.getElementById("title").value = song.title;
        document.getElementById("artist").value = song.artist;
        document.getElementById("formTitle").innerText = "📝 Sửa bài hát";
        document.getElementById("submitBtn").innerText = "Cập nhật";
        editId = id;
    }
}

// Chức năng 4: Xóa bài hát
function deleteSong(id) {
    if (confirm("Bạn có chắc muốn xóa bài hát này không?")) {
        songs = songs.filter(s => s.id !== id);
        saveAndRender();
    }
}

// Chức năng 5: Tìm kiếm (Realtime)
function searchSong() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const filtered = songs.filter(s => 
        s.title.toLowerCase().includes(keyword)
    );
    renderSongs(filtered);
}

// Lưu vào localStorage và render lại
function saveAndRender() {
    localStorage.setItem("songs", JSON.stringify(songs));
    renderSongs();
}

// Khởi tạo khi load trang
renderSongs();