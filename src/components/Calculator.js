import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-eval */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: '',
      },
    };
    this.setValue = this.setValue.bind(this);
    this.emptyValues = this.emptyValues.bind(this);
    this.removeSomeValues = this.removeSomeValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  setValue(e) {
    const { obj } = this.state;
    const newObj = { total: obj.total.concat(e.target.name) };
    this.setState({
      obj: newObj,
    });
  }

  emptyValues = () => {
    this.setState({
      obj: {
        total: '',
      },
    });
  };

  calculate = () => {
    try {
      const { obj } = this.state;
      this.setState({
        obj: {
          total: eval(obj.total).toString(),
        },
      });
    } catch (err) {
      this.setState({
        obj: {
          total: 'Error',
        },
      });
    }
  };

  removeSomeValues = () => {
    const { obj } = this.state;
    this.setState({
      obj: {
        total: obj.total.slice(0, -1),
      },
    });
  };

  render() {
    const { obj } = this.state;
    const current = obj.total;
    return (
      <div>
        <Input current={current} />
        <First
          setValue={this.setValue}
          emptyValues={this.emptyValues}
          removeSomeValues={this.removeSomeValues}
        />
        <Second setValue={this.setValue} />
        <Third setValue={this.setValue} />
        <Fourth setValue={this.setValue} />
        <Fifth setValue={this.setValue} calculate={this.calculate} />
      </div>
    );
  }
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

function Input({ current }) {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <input
        value={current}
        readOnly
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
  current: PropTypes.string.isRequired,
};