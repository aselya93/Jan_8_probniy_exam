const multer = require("multer");
const path = require("path");

//настройка хранилища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Папка для сохранения файлов
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

// проверка типа файла
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Недопустимый формат файла. Разрешены только изображения."));
  }
};

// лимиты на размер файла

const limits = {
  fileSize: 2 * 1024 * 1024, //2 MB
};

// Лимиты на размер файла
const upload = multer({
  storage,
  fileFilter,
  limits,
});

module.exports = upload;
