from flask import Flask, jsonify, request, render_template
import requests
import json

api_endpoint = 'https://jsonplaceholder.typicode.com'
fetch_all_posts = requests.get(f"{api_endpoint}/posts")
fetch_all_comments = requests.get(f"{api_endpoint}/comments")

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return 'API Works'

@app.route('/posts', methods=["GET"])
def get_posts():
    list_of_posts = []
    posts_data = fetch_all_posts.json()
    comments_data = fetch_all_comments.json()
    for post in posts_data:
        total_number_of_comments = 0
        for comment in comments_data:
            if post['id'] == comment['postId']:
                total_number_of_comments += 1
        list_of_posts.append({
            "post_id": post['id'],
            "post_title": post['title'],
            "post_body": post['body'],
            "total_number_of_comments": total_number_of_comments
        })

    return jsonify({
        "posts": list_of_posts
    })


@app.route('/comments', methods=['POST'])
def get_comments():
    filtered_comments = []
    fileds = ['id', 'email', 'body', 'name', 'postId']
    search_val = request.args.get('search');
    comments_data = fetch_all_comments.json()
    for comment in comments_data:
        for field in fileds:
            if not search_val.isdigit() and (field != "id") and (field != "postId"):
                search = search_val.lower()
                if search in comment[field]:
                    filtered_comments.append(comment)
            elif search_val.isdigit() and (field != 'name') and (field != 'body') and (field != 'email'):
                search = int(search_val)
                if search == comment[field]:
                    filtered_comments.append(comment)
    return jsonify({
        "result": filtered_comments
    })


app.run(port=5000)
