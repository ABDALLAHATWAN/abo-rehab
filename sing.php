<?php
// connect.php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mywebsite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>

<?php
// index.php
include "connect.php";

// Handle form submission
if (isset($_POST['submit'])) {
  // Get form data
  $title = $_POST['title'];
  $content = $_POST['content'];
  $image = $_FILES['image']['name'];
  $file = $_FILES['file']['name'];

  // Validate form data
  if (empty($title) || empty($content)) {
    $error = "Please fill in all fields";
  } else {
    // Upload image and file
    move_uploaded_file($_FILES['image']['tmp_name'], "uploads/$image");
    move_uploaded_file($_FILES['file']['tmp_name'], "uploads/$file");

    // Insert data into database
    $sql = "INSERT INTO posts (title, content, image, file) VALUES ('$title', '$content', '$image', '$file')";
    if ($conn->query($sql) === TRUE) {
      $success = "Post added successfully";
    } else {
      $error = "Error: " . $sql . "<br>" . $conn->error;
    }
  }
}

// Handle delete request
if (isset($_GET['delete'])) {
  // Get post id
  $id = $_GET['delete'];

  // Delete post from database
  $sql = "DELETE FROM posts WHERE id = $id";
  if ($conn->query($sql) === TRUE) {
    $success = "Post deleted successfully";
  } else {
    $error = "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Fetch all posts from database
$sql = "SELECT * FROM posts ORDER BY id DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>موقعي الديناميكي</title>
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
      /* Custom styles */
      .container {
        max-width: 800px;
        margin: 20px auto;
        direction: rtl;
      }

      .post {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .post img {
        width: 100%;
        height: auto;
      }

      .post a {
        color: #dc3545;
      }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-center">موقعي الديناميكي</h1>
        <p class="text-center">هذا موقع ويب ديناميكي يسمح لي بالتعديل وإضافة الصور والنصوص والملفات في الموقع من داخل الموقع نفسه.</p>
        <!-- Display error or success message -->
        <?php if (isset($error)): ?>
          <div class="alert alert-danger">
            <?php echo $error; ?>
          </div>
        <?php endif; ?>
        <?php if (isset($success)): ?>
          <div class="alert alert-success">
            <?php echo $success; ?>
          </div>
        <?php endif; ?>
        <!-- Display form to add new post -->
        <form method="POST" action="index.php" enctype="multipart/form-data">
          <div class="form-group">
            <label for="title">عنوان المنشور</label>
            <input type="text" name="title" id="title" class="form-control" placeholder="أدخل عنوان المنشور" required>
          </div>
          <div class="form-group">
            <label for="content">محتوى المنشور</label>
            <textarea name="content" id="content" class="form-control" placeholder="أدخل محتوى المنشور" rows="5" required></textarea>
          </div>
          <div class="form-group">
            <label for="image">صورة المنشور</label>
            <input type="file" name="image" id="image" class="form-control" accept="image/*">
          </div>
          <div class="form-group">
            <label for="file">ملف المنشور</label>
            <input type="file" name="file" id="file" class="form-control">
          </div>
          <div class="form-group">
            <button type="submit" name="submit" class="btn btn-primary">إضافة</button>
          </div>
        </form>
        <!-- Display all posts -->
        <div class="posts">
          <?php if ($result->num_rows > 0): ?>
            <?php while($row = $result->fetch_assoc()): ?>
              <div class="post">
                <h3><?php echo $row['title']; ?></h3>
                <p><?php echo $row['content']; ?></p>
                <?php if ($row['image']): ?>
                  <img src="uploads/<?php echo $row['image']; ?>" alt="<?php echo $row['title']; ?>">
                <?php endif; ?>
                <?php if ($row['file']): ?>
                  <p><a href="uploads/<?php echo $row['file']; ?>" download>تحميل الملف</a></p>
                <?php endif; ?>
                <p><a href="index.php?delete=<?php echo $row['id']; ?>">حذف المنشور</a></p>
              </div>
            <?php endwhile; ?>
          <?php else: ?>
            <p>لا يوجد منشورات بعد.</p>
          <?php endif; ?>
        </div>
    </div>
</body>
</html>