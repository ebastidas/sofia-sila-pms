/**
 * SilaLibBindingSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class SilaLibBindingSkeleton implements org.sila_standard.SilaLibPortType, org.apache.axis.wsdl.Skeleton {
    private org.sila_standard.SilaLibPortType impl;
    private static java.util.Map _myOperations = new java.util.Hashtable();
    private static java.util.Collection _myOperationsList = new java.util.ArrayList();

    /**
    * Returns List of OperationDesc objects with this name
    */
    public static java.util.List getOperationDescByName(java.lang.String methodName) {
        return (java.util.List)_myOperations.get(methodName);
    }

    /**
    * Returns Collection of OperationDescs
    */
    public static java.util.Collection getOperationDescs() {
        return _myOperationsList;
    }

    static {
        org.apache.axis.description.OperationDesc _oper;
        org.apache.axis.description.FaultDesc _fault;
        org.apache.axis.description.ParameterDesc [] _params;
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "duration"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("delay", _params, new javax.xml.namespace.QName("", "DelayResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "Delay"));
        _oper.setSoapAction("http://sila-standard.org/Delay");
        _myOperationsList.add(_oper);
        if (_myOperations.get("delay") == null) {
            _myOperations.put("delay", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("delay")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "success"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"), java.lang.Boolean.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "returnCode"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("returnError", _params, new javax.xml.namespace.QName("", "ReturnErrorResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "ReturnError"));
        _oper.setSoapAction("http://sila-standard.org/ReturnError");
        _myOperationsList.add(_oper);
        if (_myOperations.get("returnError") == null) {
            _myOperations.put("returnError", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("returnError")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendErrorEvent", _params, new javax.xml.namespace.QName("", "SendErrorEventResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendErrorEvent"));
        _oper.setSoapAction("http://sila-standard.org/SendErrorEvent");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendErrorEvent") == null) {
            _myOperations.put("sendErrorEvent", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendErrorEvent")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "duration"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendStatusEvent", _params, new javax.xml.namespace.QName("", "SendStatusEventResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendStatusEvent"));
        _oper.setSoapAction("http://sila-standard.org/SendStatusEvent");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendStatusEvent") == null) {
            _myOperations.put("sendStatusEvent", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendStatusEvent")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "countOfEvent"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendDataEvent", _params, new javax.xml.namespace.QName("", "SendDataEventResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendDataEvent"));
        _oper.setSoapAction("http://sila-standard.org/SendDataEvent");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendDataEvent") == null) {
            _myOperations.put("sendDataEvent", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendDataEvent")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "countOfKeyValuePairs"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendDictionaryResult", _params, new javax.xml.namespace.QName("", "SendDictionaryResultResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendDictionaryResult"));
        _oper.setSoapAction("http://sila-standard.org/SendDictionaryResult");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendDictionaryResult") == null) {
            _myOperations.put("sendDictionaryResult", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendDictionaryResult")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "countOfValues"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendArrayResult", _params, new javax.xml.namespace.QName("", "SendArrayResultResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendArrayResult"));
        _oper.setSoapAction("http://sila-standard.org/SendArrayResult");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendArrayResult") == null) {
            _myOperations.put("sendArrayResult", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendArrayResult")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendSimpleResult", _params, new javax.xml.namespace.QName("", "SendSimpleResultResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendSimpleResult"));
        _oper.setSoapAction("http://sila-standard.org/SendSimpleResult");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendSimpleResult") == null) {
            _myOperations.put("sendSimpleResult", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendSimpleResult")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("sendComplexResult", _params, new javax.xml.namespace.QName("", "SendComplexResultResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SendComplexResult"));
        _oper.setSoapAction("http://sila-standard.org/SendComplexResult");
        _myOperationsList.add(_oper);
        if (_myOperations.get("sendComplexResult") == null) {
            _myOperations.put("sendComplexResult", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("sendComplexResult")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("abort", _params, new javax.xml.namespace.QName("", "AbortResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "Abort"));
        _oper.setSoapAction("http://sila-standard.org/Abort");
        _myOperationsList.add(_oper);
        if (_myOperations.get("abort") == null) {
            _myOperations.put("abort", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("abort")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("doContinue", _params, new javax.xml.namespace.QName("", "DoContinueResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "DoContinue"));
        _oper.setSoapAction("http://sila-standard.org/DoContinue");
        _myOperationsList.add(_oper);
        if (_myOperations.get("doContinue") == null) {
            _myOperations.put("doContinue", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("doContinue")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "GetDeviceIdentificationResult"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"), org.sila_standard.SiLAReturnValue.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "deviceDescription"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://sila-standard.org", "DeviceIdentification"), org.sila_standard.DeviceIdentification.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("getDeviceIdentification", _params, null);
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "GetDeviceIdentification"));
        _oper.setSoapAction("http://sila-standard.org/GetDeviceIdentification");
        _myOperationsList.add(_oper);
        if (_myOperations.get("getDeviceIdentification") == null) {
            _myOperations.put("getDeviceIdentification", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("getDeviceIdentification")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "GetStatusResult"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"), org.sila_standard.SiLAReturnValue.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "deviceId"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "state"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://sila-standard.org", "State"), org.sila_standard.State.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "subStates"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://sila-standard.org", "CommandDescription"), org.sila_standard.CommandDescription[].class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "locked"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"), boolean.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "PMSId"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "currentTime"), org.apache.axis.description.ParameterDesc.OUT, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"), java.util.Calendar.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("getStatus", _params, null);
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "GetStatus"));
        _oper.setSoapAction("http://sila-standard.org/GetStatus");
        _myOperationsList.add(_oper);
        if (_myOperations.get("getStatus") == null) {
            _myOperations.put("getStatus", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("getStatus")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("initialize", _params, new javax.xml.namespace.QName("", "InitializeResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "Initialize"));
        _oper.setSoapAction("http://sila-standard.org/Initialize");
        _myOperationsList.add(_oper);
        if (_myOperations.get("initialize") == null) {
            _myOperations.put("initialize", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("initialize")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "configLevel"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "password"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("getConfiguration", _params, new javax.xml.namespace.QName("", "GetConfigurationResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "GetConfiguration"));
        _oper.setSoapAction("http://sila-standard.org/GetConfiguration");
        _myOperationsList.add(_oper);
        if (_myOperations.get("getConfiguration") == null) {
            _myOperations.put("getConfiguration", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("getConfiguration")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "configLevel"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), java.lang.Integer.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "password"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "configXML"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("setConfiguration", _params, new javax.xml.namespace.QName("", "SetConfigurationResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "SetConfiguration"));
        _oper.setSoapAction("http://sila-standard.org/SetConfiguration");
        _myOperationsList.add(_oper);
        if (_myOperations.get("setConfiguration") == null) {
            _myOperations.put("setConfiguration", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("setConfiguration")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockTimeout"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "eventReceiverURI"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "PMSId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("lockDevice", _params, new javax.xml.namespace.QName("", "LockDeviceResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "LockDevice"));
        _oper.setSoapAction("http://sila-standard.org/LockDevice");
        _myOperationsList.add(_oper);
        if (_myOperations.get("lockDevice") == null) {
            _myOperations.put("lockDevice", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("lockDevice")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("pause", _params, new javax.xml.namespace.QName("", "PauseResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "Pause"));
        _oper.setSoapAction("http://sila-standard.org/Pause");
        _myOperationsList.add(_oper);
        if (_myOperations.get("pause") == null) {
            _myOperations.put("pause", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("pause")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "deviceId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "eventReceiverURI"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "PMSId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "errorHandlingTimeout"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "simulationMode"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"), boolean.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("reset", _params, new javax.xml.namespace.QName("", "ResetResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "Reset"));
        _oper.setSoapAction("http://sila-standard.org/Reset");
        _myOperationsList.add(_oper);
        if (_myOperations.get("reset") == null) {
            _myOperations.put("reset", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("reset")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "requestId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"), int.class, false, false), 
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("", "lockId"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("unlockDevice", _params, new javax.xml.namespace.QName("", "UnlockDeviceResult"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://sila-standard.org", "SiLAReturnValue"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://sila-standard.org", "UnlockDevice"));
        _oper.setSoapAction("http://sila-standard.org/UnlockDevice");
        _myOperationsList.add(_oper);
        if (_myOperations.get("unlockDevice") == null) {
            _myOperations.put("unlockDevice", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("unlockDevice")).add(_oper);
    }

    public SilaLibBindingSkeleton() {
        this.impl = new org.sila_standard.SilaLibBindingImpl();
    }

    public SilaLibBindingSkeleton(org.sila_standard.SilaLibPortType impl) {
        this.impl = impl;
    }
    public org.sila_standard.SiLAReturnValue delay(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.delay(requestId, lockId, duration);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue returnError(int requestId, java.lang.String lockId, java.lang.Boolean success, java.lang.Integer returnCode) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.returnError(requestId, lockId, success, returnCode);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendErrorEvent(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendErrorEvent(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendStatusEvent(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendStatusEvent(requestId, lockId, duration);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendDataEvent(int requestId, java.lang.String lockId, java.lang.Integer countOfEvent) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendDataEvent(requestId, lockId, countOfEvent);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendDictionaryResult(int requestId, java.lang.String lockId, java.lang.Integer countOfKeyValuePairs) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendDictionaryResult(requestId, lockId, countOfKeyValuePairs);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendArrayResult(int requestId, java.lang.String lockId, java.lang.Integer countOfValues) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendArrayResult(requestId, lockId, countOfValues);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendSimpleResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendSimpleResult(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue sendComplexResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.sendComplexResult(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue abort(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.abort(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue doContinue(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.doContinue(requestId, lockId);
        return ret;
    }

    public void getDeviceIdentification(int requestId, java.lang.String lockId, org.sila_standard.holders.SiLAReturnValueHolder getDeviceIdentificationResult, org.sila_standard.holders.DeviceIdentificationHolder deviceDescription) throws java.rmi.RemoteException
    {
        impl.getDeviceIdentification(requestId, lockId, getDeviceIdentificationResult, deviceDescription);
    }

    public void getStatus(int requestId, org.sila_standard.holders.SiLAReturnValueHolder getStatusResult, javax.xml.rpc.holders.StringHolder deviceId, org.sila_standard.holders.StateHolder state, org.sila_standard.holders.CommandDescriptionArrayHolder subStates, javax.xml.rpc.holders.BooleanHolder locked, javax.xml.rpc.holders.StringHolder PMSId, javax.xml.rpc.holders.CalendarHolder currentTime) throws java.rmi.RemoteException
    {
        impl.getStatus(requestId, getStatusResult, deviceId, state, subStates, locked, PMSId, currentTime);
    }

    public org.sila_standard.SiLAReturnValue initialize(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.initialize(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue getConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.getConfiguration(requestId, lockId, configLevel, password);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue setConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password, java.lang.String configXML) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.setConfiguration(requestId, lockId, configLevel, password, configXML);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue lockDevice(int requestId, java.lang.String lockId, java.lang.String lockTimeout, java.lang.String eventReceiverURI, java.lang.String PMSId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.lockDevice(requestId, lockId, lockTimeout, eventReceiverURI, PMSId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue pause(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.pause(requestId, lockId);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue reset(int requestId, java.lang.String lockId, java.lang.String deviceId, java.lang.String eventReceiverURI, java.lang.String PMSId, java.lang.String errorHandlingTimeout, boolean simulationMode) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.reset(requestId, lockId, deviceId, eventReceiverURI, PMSId, errorHandlingTimeout, simulationMode);
        return ret;
    }

    public org.sila_standard.SiLAReturnValue unlockDevice(int requestId, java.lang.String lockId) throws java.rmi.RemoteException
    {
        org.sila_standard.SiLAReturnValue ret = impl.unlockDevice(requestId, lockId);
        return ret;
    }

}
