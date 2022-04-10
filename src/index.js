import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、からにする
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompletedList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = text;

  // COMPLETE BUTTON タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETE";
  completeButton.addEventListener("click", () => {
    deleteFromIncompletedList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化する
    addTarget.textContent = null;
    console.log(addTarget);
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "Back";

    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
      document.getElementById("completed-list").removeChild(deleteTarget);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("completed-list").appendChild(addTarget);

    console.log(li);
  });

  // DELETE BUTTON タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompletedList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  document.getElementById("incompleted-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
