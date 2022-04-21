import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-eval */
function Calculator() {
  const [data, setData] = useState('');
  const setValue = (e) => {
    setData(data.concat(e.target.name));
  };
  const emptyValues = () => {
    setData('');
  };
  const removeSomeValues = () => {
    setData(data.slice(0, -1));
  };
  const calculate = () => {
    try {
      setData(eval(data).toString());
    } catch (err) {
      setData('Error');
    }
  };
  return (
    <div>
      <Input data={data} setData={setData} />
      <First
        setValue={setValue}
        emptyValues={emptyValues}
        removeSomeValues={removeSomeValues}
      />
      <Second setValue={setValue} />
      <Third setValue={setValue} />
      <Fourth setValue={setValue} />
      <Fifth setValue={setValue} calculate={calculate} />
    </div>
  );
}

export default Calculator;

function First({ setValue, emptyValues, removeSomeValues }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <button
        type="button"
        onClick={emptyValues}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '47%',
        }}
      >
        Clear
      </button>
      <button
        type="button"
        onClick={removeSomeValues}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        C
      </button>
      <button
        type="button"
        name="+"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        +
      </button>
    </div>
  );
}

First.propTypes = {
  setValue: PropTypes.func.isRequired,
  emptyValues: PropTypes.func.isRequired,
  removeSomeValues: PropTypes.func.isRequired,
};

function Second({ setValue }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
      }}
    >
      <button
        type="button"
        name="7"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        7
      </button>
      <button
        name="8"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        8
      </button>
      <button
        name="9"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        9
      </button>
      <button
        name="-"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        -
      </button>
    </div>
  );
}

Second.propTypes = {
  setValue: PropTypes.func.isRequired,
};

function Third({ setValue }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
      }}
    >
      <button
        name="4"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        4
      </button>
      <button
        name="5"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        5
      </button>
      <button
        name="6"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        6
      </button>
      <button
        name="*"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        *
      </button>
    </div>
  );
}

Third.propTypes = {
  setValue: PropTypes.func.isRequired,
};

function Fourth({ setValue }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
      }}
    >
      <button
        name="1"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        1
      </button>
      <button
        name="2"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        2
      </button>
      <button
        type="button"
        name="3"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        3
      </button>
      <button
        name="/"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
        }}
      >
        /
      </button>
    </div>
  );
}

Fourth.propTypes = {
  setValue: PropTypes.func.isRequired,
};

function Fifth({ setValue, calculate }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
      }}
    >
      <button
        name="0"
        type="button"
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
          marginBottom: 20,
        }}
      >
        0
      </button>
      <button
        type="button"
        name="."
        onClick={(e) => setValue(e)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '20%',
          marginBottom: 20,
        }}
      >
        .
      </button>
      <button
        type="button"
        onClick={calculate}
        style={{
          backgroundColor: 'green',
          color: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 7,
          width: '47%',
          marginBottom: 20,
        }}
      >
        =
      </button>
    </div>
  );
}

Fifth.propTypes = {
  setValue: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
};

function Input({ data, setData }) {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
        }}
        type="text"
      />
    </div>
  );
}

Input.propTypes = {
  data: PropTypes.func.isRequired,
  setData: PropTypes.string.isRequired,
};
