# Run the Back-end Locally

Install and run locally.

**👩‍👧 Clone repository**


<div class="termy">

```console
$ git clone https://github.com/Acts-College-Ministry/yumz
---> 100%
```

</div>

** Navigate into the repository ** 

<div class="termy">

```console
$ cd yumz
// Now you are in the repostiory 😁
```

</div>

Navigate to `yumz/backend`

<div class="termy">

```console
$ cd yumz
// Now you are in our main app folder 😎
$ cd backend
// Now you are in our back-end app folder 👩‍💻
```

</div>

You should find yourself here:
```
repository
    └───yumz
        └───backend <-- you are here
```

**🐍 Create Python virtual environment**

There are a good amount of depencies for this project -- it will be good practice to use a virtual environment, albeit not necessary.

=== "macOS/Linux"

    ```
    python3 -m venv env
    ```

=== "Windows Command Line"

    ```
    python -m venv env
    ```

=== "Windows Powershell"

    ```
    python -m venv env
    ```

The last argument is the location to create the virtual environment. Generally, you can just create this in your project and call it env.


**✅ Activate virtual environment**

=== "macOS/Linux"

    ```
    source env/bin/activate
    ```

=== "Windows Command Line"

    ```
    .\env\Scripts\activate.bat
    ```

=== "Windows Powershell"

    ```
    .\env\Scripts\activate.ps1
    ```


**📦 Install packages**

<div class="termy">

```console
$ python -m pip install -r requirements.txt

---> 100%
```

</div>

### Running the Backend API

**🦄 Run Fast API using uvicorn**



<div class="termy">

```console
$ uvicorn app.main:app --reload

←[32mINFO←[0m:     Uvicorn running on ←[1mhttp://127.0.0.1:8000←[0m (Press CTRL+C to quit)
←[32mINFO←[0m:     Started reloader process [←[36m←[1m38240←[0m] using ←[36m←[1mstatreload←[0m
←[32mINFO←[0m:     Started server process [←[36m13020←[0m]
←[32mINFO←[0m:     Waiting for application startup.
←[32mINFO←[0m:     Application startup complete.
```

</div>
