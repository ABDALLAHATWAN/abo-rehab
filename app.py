# app.py
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(_name_)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)

    def _repr_(self):
        return f"Post {self.id}: {self.content}"

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        post_content = request.form['content']
        new_post = Post(content=post_content)
        db.session.add(new_post)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        all_posts = Post.query.order_by(Post.id).all()
        return render_template('index.html', posts=all_posts)

@app.route('/delete/<int:id>')
def delete(id):
    post = Post.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('index'))

if _name_ == "_main_":
    app.run(debug=True)